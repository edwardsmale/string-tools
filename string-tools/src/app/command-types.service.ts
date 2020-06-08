import { Injectable } from '@angular/core';
import { isArray } from "util";
import { TextUtilsService } from './text-utils.service';
import { SortService } from './sort.service';

@Injectable({
  providedIn: 'root'
})
export class CommandTypesService {

  constructor(private textUtilsService : TextUtilsService, private sortService : SortService) { 
    this.textUtilsService = textUtilsService;
    this.sortService = sortService;
  }

  FindCommandType = function(name: string) {
    
    for (let i = 0; i < this.CommandTypes.length; i++) {
      if (this.CommandTypes[i].name === name) {
        return this.CommandTypes[i];
      }
    }
    return null;
  };

  CommandTypes = [
    {
      name: "noop",
      desc: "Does nothing",
      para: [],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        if (explain) {
          return "";
        } else {
          return value;
        }
      }).bind(this)
    },
    {
      name: "regex",
      desc: "Sets the current regex",
      para: [
        {
          name: "Regex",
          desc: "String defining the regex"
        }
      ],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        context.regex = this.textUtilsService.AsScalar(para);
        context.searchString = null;
        if (explain) {
          return "Set the current regex to " + para;
        } else {
          return value;
        }
      }).bind(this)
    },
    {
      name: "search",
      desc: "Sets the current search string",
      para: [
        {
          name: "Search String",
          desc: "The search string to set"
        }
      ],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        context.searchString = this.textUtilsService.AsScalar(para);
        context.regex = null;
        if (explain) {
          return "Set the current search string to " + para;
        } else {
          return value;
        }
      }).bind(this)
    },
    {
      name: "replace",
      desc: "Replaces text that matches the current regex or search string",
      para: [
        {
          name: "Replacement text",
          desc: "The text to replace the matching text with"
        }
      ],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        if (explain) {
          if (context.regex) {
            return "Replaces text matching the regex '" + context.regex + "' with '" + para + "'";
          } else if (context.searchString) {
            return "Replaces '" + context.searchString + "' with '" + para + "'";
          } else {
            return "*** This command only works if a regex or search string has been set by an earlier 'regex' or 'search' instruction."
          }
        } else {
          if (context.regex) {
            return this.textUtilsService.GlobalRegexReplace(value as string, context.regex, para);
          } else if (context.searchString) {
            return this.textUtilsService.GlobalStringReplace(value as string, context.searchString, para);
          } else {
            return value;
          }
        }
      }).bind(this)
    },
    {
      name: "split",
      desc: "Splits up text.",
      para: [
        {
          name: "Separator",
          desc: "The string upon which to split."
        }
      ],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        value = this.textUtilsService.AsScalar(value);

        if (!para && context.regex) {
          if (explain) {
            return "Split the text using the regex " + context.regex;
          } else {
            return (value as string).split(new RegExp(context.regex));
          }
        }
        else if (!para && context.searchString) {
          if (explain) {
            return "Split the text on '" + context.searchString + "'";
          } else {
            return (value as string).split(context.searchString);
          }
        }
        else {
          var defaultDelimiter = context.isTabDelimited ? "\t" : ",";
          para = para === "\\t" ? "\t" : para;
          var delimiter = para || defaultDelimiter;
          
          if (explain) {
            var formattedDelimiter = this.textUtilsService.FormatDelimiter(delimiter, false);
            return "Split the text on every " + formattedDelimiter;
          } else {

            if (delimiter.length === 1 && "|^$*()\\/[].+".includes(delimiter)) {
              delimiter = "\\" + delimiter;
            }

            var splitValues = (value as string).split(new RegExp(delimiter));

            for (let i = 0; i < splitValues.length; i++) {
              if (context.isColumnNumeric.length <= i) {
                context.isColumnNumeric[i] = true;
              }
              
              if (!this.textUtilsService.IsNumeric(splitValues[i])) {
                context.isColumnNumeric[i] = false;
              }
            }

            return splitValues;
          }
        }
      }).bind(this)
    },
    {
      name: "sort",
      desc: "Sorts the items",
      para: [
        {
          name: "index",
          desc: "Index(es) of column to sort on"
        }
       ],
      isArrayBased: false,
      exec: (function(value: (string | string[])[], para: string, context: any, explain: boolean) {
        if (!para) {
          if (explain) {
            return "Sorts the items";
          } else {
            return (value as string[]).sort();
          }
        } else {
          var indices = this.textUtilsService.ParseIntegers(para);
          if (explain) {
            let positions: string[] = [];

            for (let i = 0; i < indices.length; i++) {
              if (!isNaN(indices[i])) {
                if (indices[i] >= 0) {
                  positions.push("[" + indices[i] + "]");
                } else {
                  positions.push("[" + Math.abs(indices[i]) + " from the end]");
                }
              }
            }
            return "Sorts on column" + (indices.length === 1 ? "" : "s") + " " + positions.join(" ");
          } else if (!para) {
            return this.sortService.SortLines(value, indices);
          } else {
            let indices = this.textUtilsService.ParseIntegers(para);

            return this.sortService.SortArrays(value, indices);
          }
        }
      }).bind(this)
    },
    {
      name: "skip",
      desc: "Skips the first N items",
      para: [
        {
          name: "N",
          desc: "How many items to skip"
        }
      ],
      isArrayBased: true,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        var n = parseInt(para, 10);
        if (explain) {
          if (isNaN(n)) {
            return "Skip n items";
          } else {
            return "Skip " + n + " item" + (n === 1 ? "" : "s");
          }
        } else {
          if (isNaN(n)) {
            return value;
          }
          else {
            if (n >= 0) {
              return (value as string[]).slice(n);
            } else {
              return (value as string[]).slice(0, -n);
            }
          }
        }       
      }).bind(this)
    },
    {
      name: "take",
      desc: "Takes the first N items and ignores the rest",
      para: [
        {
          name: "N",
          desc: "How many items to take"
        }
      ],
      isArrayBased: true,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        var n = parseInt(para, 10);
        if (explain) {
          if (isNaN(n)) {
            return "Take the first n items and ignore the rest";
          } else {
            return "Take the first " + n + " item" + (n === 1 ? "" : "s") + " only";
          }
        } else {
          if (isNaN(n)) {
            return value;
          }
          else{
            if (n >= 0) {
              return (value as string[]).slice(0, n);
            } else {
              return (value as string[]).slice(-n);
            }
          }
        }          
      }).bind(this)
    },
    {
      name: "at",
      desc: "Takes items at certain indices.",
      para: [
        {
          name: "Column Indices",
          desc: "Zero-based. Nnegatives count back from the end."
        }
      ],
      isArrayBased: true,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        
        const indices = this.textUtilsService.ParseIntegers(para);

        if (explain) {
          let positions: string[] = [];
  
          for (let i = 0; i < indices.length; i++) {
            if (!isNaN(indices[i])) {
              if (indices[i] >= 0) {
                positions.push("[" + indices[i].toString() + "]");
              } else {
                positions.push("[" + Math.abs(indices[i]) + " from the end" + "]");
              }
            }
          }

          return "Get the item" + (positions.length === 1 ? "" : "s") + " at position" + (positions.length === 1 ? "" : "s") + " " + positions.join(" ");
        } else {

          let result = [];

          for (let i = 0; i < indices.length; i++) {
            var index = indices[i];

            if (index < 0) {
              index = value.length + index;
            }

            if (index >= 0 && index < value.length) {
              result.push(value[index]);
            }
          }

          return result;

        }
      }).bind(this)
    },
    {
      name: "contains",
      desc: "Only include items which match a regex or search string",
      para: [
        {
          name: "Search String",
          desc: "The string which items must contain in order to be included"
        }
      ],
      isArrayBased: true,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {

        var searchString = para || context.searchString;

        if (!searchString && context.regex) {          
          if (explain) {
            return "Only include items which match the regex " + context.regex;
          } else {
            if (isArray(value)) {
              return (value as string[]).filter(function (val: string) { return new RegExp(context.regex).test(val); });
            } else {
              return new RegExp(context.regex).test(value as string) ? value : null;
            }
          }
        }
        else
        {
          if (explain) {
            return "Only include items containing '" + searchString + "'";
          } else {
            return (value as string[]).filter(function (val: string) { return val.includes(searchString); });
          }
        }
      }).bind(this)
    },
    {
      name: "flat",
      desc: "Flattens an array of arrays into one array, or batches items into arrays of a given size",
      para: [        {
        name: "Batch Size",
        desc: "If set, converts into batches of this size"
      }],
      isArrayBased: true,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        if (explain) {
          if (this.textUtilsService.IsNumeric(para)) {
            return "Convert into arrays of " + para + " items";
          } else {
            return "Flatten an array of arrays into one array";
          }
        } else {
          return value;
        }
      }).bind(this)
    },
    {
      name: "enclose",
      desc: "Put character(s) at the start and end of each item",
      para: [],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        var leftChar: string;
        var rightChar: string;

        if (para.length === 0) {
          leftChar = "(";
          rightChar = ")";
        } else if (para.length === 1) {
          leftChar = para[0];
          rightChar = para[0];
        } else {
          leftChar = para[0];
          rightChar = para[1];          
        }

        if (explain) {
          return "Enclose each item in " + leftChar + "  " + rightChar;
        } else {
          var scalarValue = this.textUtilsService.AsScalar(value);
          return leftChar + scalarValue + rightChar;
        }
      }).bind(this)
    },
    {
      name: "tsv",
      desc: "Tab-separates text that has been split.",
      para: [],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        if (explain) {
          return "Output the items in tab-separated format";
        } else {
          value = this.textUtilsService.AsArray(value);
          return (value as string[]).join("\t");
        }
      }).bind(this)
    },
    {
      name: "csv",
      desc: "Outputs the items in CSV format.",
      para: [
        {
          name: "'",
          desc: "Enclose values in single quotes."
        },
        {
          name: '"',
          desc: "Enclose values in double quotes."
        },
        {
          name: "@",
          desc:
            "When values are enclosed in double quotes, precede " +
            "opening double quotes with the @ symbol."
        },
        {
          name: "\\",
          desc:
            "When values are enclosed in double quotes, escape " +
            "any double quotes within values with a backslash."
        },
        {
          name: "<anything else>",
          desc: "The character(s) to use as the delimiter."
        }
      ],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        value = this.textUtilsService.AsArray(value);

        var options = {
          isDoubleQuote: para.includes('"'),
          isSingleQuote: para.includes("'"),
          isAtString: para.includes("@"),
          isEscaped: para.includes("\\"),
          delimiter: para.replace(/["'\\@]+/, "") || ","
        };

        if (para.includes("\\t")) {
          options.delimiter = "\t";
        }

        if (explain) {

          var explanation = "Output the items";

          if (options.delimiter === ",") {
            explanation += " in CSV format";
          } else {
            var formattedDelimiter = this.textUtilsService.FormatDelimiter(options.delimiter, true);
            explanation += " separated with " + formattedDelimiter;
          }
  
          if (options.isDoubleQuote) {
            explanation += ", with values in double quotes"
  
            if (options.isAtString) {
              explanation += " preceded by @"
            }
  
            if (options.isEscaped) {
              explanation += ", backslash-escaping any double quotes";
            } else {
              explanation += ", doubling-up any double quotes";
            }
          }
          else if (options.isSingleQuote) {
            explanation += ", with values in single quotes"
  
            if (options.isEscaped) {
              explanation += ", backslash-escaping any quotes";
            } else {
              explanation += ", doubling-up any quotes";
            }
          }
  
          return explanation;

        } else {

          var toDelimitedString = function(value: string[], options) {
            var result = [];

            for (let i = 0; i < value.length; i++) {
              var val = value[i];
              if (options.isDoubleQuote) { // || val.includes(options.delimiter)) {
                if (options.isEscaped) {
                  // Replace " with \"
                  val = val.replace(/"/g, '\\"');
                  val = '"' + val + '"';
                } else {
                  // Replace " with ""
                  val = val.replace(/"/g, '""');
                  val = '"' + val + '"';
                  if (options.isAtString) {
                    val = "@" + val;
                  }
                }
              } else if (options.isSingleQuote) {
                if (options.isEscaped) {
                   // Replace ' with \'
                  val = val.replace(/'/g, "\\'");
                  val = "'" + val + "'";
                } else {
                  // Replace ' with ''
                  val = val.replace(/'/g, "''");
                  val = "'" + val + "'";
                }
              }
              result.push(val);
            }
            return result.join(options.delimiter);
          };
        }

        return toDelimitedString((value as string[]), options);
      }).bind(this)
    },
    {
      name: "join",
      desc: "Joins a split line of text back together.",
      para: [
        {
          name: "delimiter",
          desc: "The delimiter to insert between items (default is tab)."
        }
      ],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        value = this.textUtilsService.AsArray(value);
        var defaultDelimiter = context.isTabDelimited ? "\t" : " ";
        para = para === "\\t" ? "\t" : para;
        var delimiter = para || defaultDelimiter;

        if (explain) {
          var formattedDelimiter = this.textUtilsService.FormatDelimiter(delimiter, true);
          return "Output items separated with " + formattedDelimiter + " - doesn't escape " + formattedDelimiter + " in values";
        } else {
          return (value as string[]).join(delimiter);
        }
      }).bind(this)
    },
    {
      name: "print",
      desc: "Prints output",
      para: [{ name: "<text>", desc: "What to print." }],
      isArrayBased: false,
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        if (explain) {
          return "print " + para;
        } else {
          var result = para;
          var arrayValue = isArray(value) ? (value as string[]) : ([ "", value ] as string[]);
          
          // Replace $0 with the whole value.
          result = result.replace(new RegExp("\\$0", "g"), arrayValue.join(""));
          
          // Replace $1..$9 with the value at index 1..9.
          for (let i = 1; i <= 9; i++) {
            if (i <= arrayValue.length) {
              result = result.replace(new RegExp("\\$" + i, "g"), arrayValue[i - 1]);
            }
          }
          // Replace $-1..$-9 with the value -1..-9 from the end.
          for (let i = 1; i <= 9; i++) {
            if (arrayValue.length - i >= 0) {
              result = result.replace(
                new RegExp("\\$-" + i, "g"),
                arrayValue[arrayValue.length - i]
              );
            }
          }
          // Replace $A..$Z and $a..$z with the value at index 10..35.
          for (let i = 0; i < 26; i++) {
            if (i + 10 < arrayValue.length) {
              result = result.replace(
                new RegExp(
                  "\\$[" +
                    String.fromCharCode(i + 65) +
                    String.fromCharCode(i + 97) +
                    "]",
                  "g"
                ),
                arrayValue[i + 10]
              );
            }
          }
          return result;
        }
      }).bind(this)
    }
  ];  
}