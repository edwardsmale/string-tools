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
      if (new RegExp(this.CommandTypes[i].name).test(name)) {
        return this.CommandTypes[i];
      }
    }
    return null;
  };

  CommandTypes = [
    {
      name: "split",
      desc: "Splits up the line of text.",
      para: [
        {
          name: "Separator",
          desc: "The string upon which to split."
        }
      ],
      explain: (function(para: string, isTabDelimited: boolean) {
        return "split " + para;
      }).bind(this),
      exec: (function(value, para: string, isTabDelimited: boolean) {
        value = this.textUtilsService.AsScalar(value);
        var defaultDelimiter = isTabDelimited ? "\t" : ",";
        var delimiter = para || defaultDelimiter;
        return value.split(new RegExp(delimiter));
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
      explain: (function(para: string) {
        return "at " + para;
        // var positives = this.textUtilsService.GetNegatives(para);
        // var negatives = this.textUtilsService.GetNonNegatives(para);
        // var i: number;
        // for (i = 0; i < positives.length; i++) {
          
        // }
      }).bind(this),
      exec: (function(value, para: string) {
        value = this.textUtilsService.AsArray(value);
        var indices = para.trim().split(/[^\d\-]+/);
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
      }).bind(this)
    },
    {
      name: "tsv",
      desc: "Tab-separates text that has been split.",
      para: [],
      explain: (function(para: string) {
        return "tsv " + para;
      }).bind(this),
      exec: (function(value, para: string) {
        value = this.textUtilsService.AsArray(value);
        return value.join("\t");
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
      explain: (function(para: string) {
        return "csv " + para;
      }).bind(this),
      exec: (function(value, para: string) {
        value = this.textUtilsService.AsArray(value);

        var options = {
          isDoubleQuote: para.includes('"'),
          isSingleQuote: para.includes("'"),
          isAtString: para.includes("@"),
          isEscaped: para.includes("\\"),
          delimiter: para.replace(/["'\\@]+/, "") || ","
        };

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

        return toDelimitedString(value, options);
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
      explain: (function(para: string, isTabDelimited: boolean) {
        return "join " + para;
      }).bind(this),
      exec: (function(value, para: string, isTabDelimited: boolean) {
        value = this.textUtilsService.AsArray(value);
        var defaultDelimiter = isTabDelimited ? "\t" : ",";
        var delimiter = para || defaultDelimiter;
        return value.join(delimiter);
      }).bind(this)
    },
    {
      name: "print",
      desc: "Prints output",
      para: [{ name: "<text>", desc: "What to print." }],
      explain: (function(para: String) {
        return "print " + para;
      }).bind(this),
      exec: (function(value, para: string) {
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
      }).bind(this)
    }
  ];  
}
