import { Injectable } from '@angular/core';
import { isArray } from "util";

@Injectable({
  providedIn: 'root'
})
export class TextUtilsService {

  constructor() { }

  // Global string replacement, which avoids:
  // - Using a regex, and having to escape certain characters
  // - Certain characters in the replacement string having special meanings.
  GlobalStringReplace(value: string, find: string, replacement: string) {
    return value.split(find).join(replacement);
  }

  // Global string replacement with a regex.
  GlobalRegexReplace(value: string, regex: string, replacement: string) {
    return value.replace(new RegExp(regex, "g"), replacement);
  }

  LinesToText(lines : string[]): string {
    return lines.join("\r\n");
  }

  TextToLines(text : string): string[] {
    return text.split(/\n/);
  }

  IsNumeric(value) {
    return /^-{0,1}\d+$/.test(value);
  }

  IsPositiveInteger(value) {
    return /^[1-9]\d*$/.test(value);
  }

  AsArray(value : string | string[]): string[] {
    if (isArray(value)) {
      return (value as string[]);
    } else {
      return (value as string).split(/\s+/);
    }
  }

  AsScalar(value : string | string[]): string {
    if (isArray(value)) {
      return (value as string[])[0];
    } else {
      return (value as string);
    }
  }

  ParseIntegers = function(para: string) : number[] {
    var split = para.trim().split(/[^\d\-]+/);
    var integers = [];
    for (var i = 0; i < split.length; i++) {
      integers.push(parseInt(split[i], 10));
    }
    return integers;
  };
  
  IsTabDelimited = function(lines: string[]) {

    var countTabs = function(line: string) {
      return (line.match(/\t/g) || []).length;
    };
    var tabsPerLine = countTabs(lines[0]);
    if (tabsPerLine === 0) {
      return false;
    }
    for (let i = 0; i < lines.length; i++) {
      if (countTabs(lines[i]) !== tabsPerLine) {
        return false;
      }
    }
    return true;
  };

  FormatDelimiter = function(delimiter: string, pluralise: boolean) {

    var formatDelimiterSingular = function(delimiter: string) {
      if (delimiter === "\t") {
        return "tab";
      }
      else if (delimiter === " ") {
        return "space";
      }
      else if (delimiter === ",") {
        return "comma";
      }
      else if (delimiter.length === 1) {
        return delimiter + " character";
      }
      else {
        return "match of the regex " + delimiter;
      }
    };

    var formattedDelimiter = formatDelimiterSingular(delimiter);

    return pluralise ? formattedDelimiter + "s" : formattedDelimiter;
  }
}