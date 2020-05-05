import { Component } from "@angular/core";
import { isArray } from "util";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  h1 = "string-tools";
  outputValue = "";

  commandTypes = [
    {
      name: "split",
      desc: "Splits up the line of text.",
      para: [
        {
          name: "Separator",
          desc: "The string upon which to split."
        }
      ],
      exec: function(value, para: string, isTabDelimited: boolean) {
        value = isArray(value) ? value[0] : value;
        var defaultDelimiter = isTabDelimited ? "\t" : ",";
        var delimiter = para || defaultDelimiter;
        return value.split(new RegExp(delimiter));
      }
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
      exec: function(value, para: string) {
        value = isArray(value) ? value : value.split(/\s+/);
        var indices = para.trim().split(/[^\d]+/);
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
    },
    {
      name: "tsv",
      desc: "Tab-separates text that has been split.",
      para: [],
      exec: function(value, para: string) {
        value = isArray(value) ? value : value.split(/\s+/);
        return value.join("\t");
      }
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
      exec: function(value, para: string) {
        value = isArray(value) ? value : value.split(/\s+/);

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
      }
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
      exec: function(value, para: string, isTabDelimited: boolean) {
        value = isArray(value) ? value : value.split(/\s+/);
        var defaultDelimiter = isTabDelimited ? "\t" : ",";
        var delimiter = para || defaultDelimiter;
        return value.join(delimiter);
      }
    },
    {
      name: "print",
      desc: "Prints output",
      para: [{ name: "<text>", desc: "What to print." }],
      exec: function(value, para: string) {
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
    }
  ];

  findCommandType = function(name: string) {
    var i: number;

    for (i = 0; i < this.commandTypes.length; i++) {
      if (new RegExp(this.commandTypes[i].name).test(name)) {
        return this.commandTypes[i];
      }
    }
    return null;
  };

  ProcessClick(codeValue: string, inputValue: string) {
    var codeLines = codeValue.trim().split(/\n/);
    var lines = inputValue.trim().split(/\n/);
    var outputLines = [];
    var i: number;
    var j: number;

    var determineIsTabDelimited = function(lines: string[]) {
      var countTabs = function(line: string) {
        return (line.match(/\t/g) || []).length;
      };
      var tabsPerLine = countTabs(lines[0]);
      if (tabsPerLine === 0) {
        return false;
      }
      for (j = 0; j < lines.length; j++) {
        if (countTabs(lines[j]) !== tabsPerLine) {
          return false;
        }
      }
      return true;
    };

    var isTabDelimited = determineIsTabDelimited(lines);

    for (j = 0; j < lines.length; j++) {
      var currentValue: string | string[] = lines[j];
      for (i = 0; i < codeLines.length; i++) {
        var codeLine = codeLines[i].trim();
        if (codeLine.length > 0) {
          var codeLineSplit = codeLine.split(/\s+/);
          var commandName = codeLineSplit[0];
          var commandType = this.findCommandType(commandName);
          if (commandType === null) {
            commandName = "print";
            commandType = this.findCommandType(commandName);
          }
          var para = codeLine.replace(commandName, "").trim();
          currentValue = commandType.exec(currentValue, para, isTabDelimited);
        }
      }

      if (isArray(currentValue)) {
        outputLines.push(currentValue.join(" "));
      } else {
        outputLines.push(currentValue);
      }
    }
    this.outputValue = outputLines.join("\r\n");
  }
} 