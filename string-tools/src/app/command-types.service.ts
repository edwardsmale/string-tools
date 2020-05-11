import { Injectable } from '@angular/core';
import { isArray } from "util";
import { TextUtilsService } from './text-utils.service';

@Injectable({
  providedIn: 'root'
})
export class CommandTypesService {

  constructor(private textUtilsService : TextUtilsService) { 
    this.textUtilsService = textUtilsService;
  }

  FindCommandType = function(name: string) {
    var i: number;
    for (i = 0; i < this.CommandTypes.length; i++) {
      if (new RegExp("^" + this.CommandTypes[i].name).test(name)) {
        return this.CommandTypes[i];
      }
    }
    return null;
  };

  CommandTypes = [
    {
      name: "regex",
      desc: "Sets the current regex",
      para: [
        {
          name: "Regex",
          desc: "String defining the regex"
        }
      ],
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
      name: "searchString|search-string",
      desc: "Sets the current search string",
      para: [
        {
          name: "Search String",
          desc: "The search string to set"
        }
      ],
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
      name: "split",
      desc: "Splits up the line of text.",
      para: [
        {
          name: "Separator",
          desc: "The string upon which to split."
        }
      ],
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        value = this.textUtilsService.AsScalar(value);

        if (!para && context.regex) {
          if (explain) {
            return "Split the line using the regex " + context.regex;
          } else {
            return (value as string).split(new RegExp(context.regex));
          }
        }
        else if (!para && context.searchString) {
          if (explain) {
            return "Split the line on '" + context.searchString + "'";
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
            return "Split the line on every " + formattedDelimiter;
          } else {
            return (value as string).split(new RegExp(delimiter));
          }
        }
      }).bind(this)
    },
    {
      name: "match|filter",
      desc: "Only lines which match a regex or search string",
      para: [
        {
          name: "Regex",
          desc: "The regex which lines must match"
        }
      ],
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {

        var regex = para || context.regex;

        if (!regex && context.searchString) {
          if (explain) {
            return "Only include lines containing '" + context.searchString + "'";
          } else {
            if (isArray(value)) {
              return (value as string[]).filter(function (val: string) { return val.includes(context.searchString); });
            } else {
              return (value as string).includes(context.searchString) ? value : null;
            }
          }
        }
        else
        {
          if (explain) {
            return "Only include lines matching the regex " + regex;
          } else {
            if (isArray(value)) {
              return (value as string[]).filter(function (val: string) { return new RegExp(regex).test(val); });
            } else {
              return new RegExp(regex).test(value as string) ? value : null;
            }
          }
        }
      }).bind(this)
    },
    {
      name: "nomatch|exclude",
      desc: "Exclude lines that match a regex or search string",
      para: [
        {
          name: "Regex",
          desc: "The regex that lines must not match"
        }
      ],
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {

        var regex = para || context.regex;

        if (!regex && context.searchString) {
          if (explain) {
            return "Exclude lines containing '" + context.searchString + "'";
          } else {
            if (isArray(value)) {
              return (value as string[]).filter(function (val: string) { return !val.includes(context.searchString); });
            } else {
              return (value as string).includes(context.searchString) ? null : value;
            }
          }
        }
        else
        {
          if (explain) {
            return "Exclude lines matching the regex " + regex;
          } else {
            if (isArray(value)) {
              return (value as string[]).filter(function (val: string) { return !new RegExp(regex).test(val); });
            } else {
              return new RegExp(regex).test(value as string) ? null : value;
            }
          }
        }
      }).bind(this)
    },
    {
      name: "at",
      desc: "Selects specified columns from text that has been split.",
      para: [
        {
          name: "Column Indices",
          desc: "Zero-based. Use negatives to count back from the end."
        }
      ],
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        if (explain) {
          const indices = this.textUtilsService.ParseIntegers(para);
          var positions: string[] = [];
  
          for (var i = 0; i < indices.length; i++) {
            if (indices[i] >= 0) {
              positions.push("[" + indices[i].toString() + "]");
            } else {
              positions.push("[" + Math.abs(indices[i]) + " from the end" + "]");
            }
          }
          return "Get the items at positions " + positions.join(" ");
        } else {
          value = this.textUtilsService.AsArray(value);
          const indices = para.trim().split(/[^\d\-]+/);
          var result = [];
          var i: number;
          for (i = 0; i < indices.length; i++) {
            var index = parseInt(indices[i], 10);
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
      name: "tsv",
      desc: "Tab-separates text that has been split.",
      para: [],
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
      desc: "Delimits text which has been split.",
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
          }
  
          return explanation;

        } else {

          var toDelimitedString = function(value: string[], options) {
            var result = [];
            var i: number;
            for (i = 0; i < value.length; i++) {
              var val = value[i];
              if (options.isDoubleQuote || val.includes(options.delimiter)) {
                if (options.isEscaped) {
                  // Replace " with \"
                  val = val.replace(new RegExp('"'), '\\"');
                  val = '"' + val + '"';
                } else {
                  // Replace " with ""
                  val = val.replace(new RegExp('"'), '""');
                  val = '"' + val + '"';
                  if (options.isAtString) {
                    val = "@" + val;
                  }
                }
              } else if (options.isSingleQuote) {
                val = val.replace(new RegExp("'"), "''");
                val = "'" + val + "'";
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
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        value = this.textUtilsService.AsArray(value);
        var defaultDelimiter = context.isTabDelimited ? "\t" : " ";
        para = para === "\\t" ? "\t" : para;
        var delimiter = para || defaultDelimiter;

        if (explain) {
          var formattedDelimiter = this.textUtilsService.FormatDelimiter(delimiter, true);
          return "Output array separated with " + formattedDelimiter + " - doesn't escape " + formattedDelimiter + " in values";
        } else {
          return (value as string[]).join(delimiter);
        }
      }).bind(this)
    },
    {
      name: "print",
      desc: "Prints output",
      para: [{ name: "<text>", desc: "What to print." }],
      exec: (function(value: string | string[], para: string, context: any, explain: boolean) {
        if (explain) {
          return "print " + para;
        } else {
          var result = para;
          var i: number;
          if (isArray(value)) {
            // Replace $1..$9 with the value at index 1..9.
            for (i = 0; i <= 9; i++) {
              if (i < value.length) {
                result = result.replace(new RegExp("\\$" + i, "g"), value[i]);
              }
            }
            // Replace $-1..$-9 with the value -1..-9 from the end.
            for (i = 1; i <= 9; i++) {
              if (value.length - i >= 0) {
                result = result.replace(
                  new RegExp("\\$-" + i, "g"),
                  value[value.length - i]
                );
              }
            }
            // Replace $A..$Z and $a..$z with the value at index 10..35.
            for (i = 0; i < 26; i++) {
              if (i + 10 < value.length) {
                result = result.replace(
                  new RegExp(
                    "\\$[" +
                      String.fromCharCode(i + 65) +
                      String.fromCharCode(i + 97) +
                      "]",
                    "g"
                  ),
                  value[i + 10]
                );
              }
            }
          } else {
          }
          return result;
        }
      }).bind(this)
    }
  ];  
}