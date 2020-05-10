import { Injectable } from '@angular/core';
import { isArray } from "util";

@Injectable({
  providedIn: 'root'
})
export class TextUtilsService {

  constructor() { }

  LinesToText(lines : string[]): string {
    return lines.join("\r\n");
  }

  TextToLines(text : string): string[] {
    return text.trim().split(/\n/);
  }

  AsArray(value : string | string[]): string[] {
    if (isArray(value)) {
      return value;
    } else {
      return value.split(/\s+/);
    }
  }

  AsScalar(value : string | string[]): string {
    if (isArray(value)) {
      return value[0];
    } else {
      return value;
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
    var i: number;
    var countTabs = function(line: string) {
      return (line.match(/\t/g) || []).length;
    };
    var tabsPerLine = countTabs(lines[0]);
    if (tabsPerLine === 0) {
      return false;
    }
    for (i = 0; i < lines.length; i++) {
      if (countTabs(lines[i]) !== tabsPerLine) {
        return false;
      }
    }
    return true;
  };

  FormatDelimiter = function(delimiter: string) {
    if (delimiter === "\t") {
      return "tabs";
    }
    else if (delimiter === " ") {
      return "spaces";
    }
    else if (delimiter === ",") {
      return "commas";
    }
    else {
      return "'" + delimiter + "' characters";
    }
  }
}
