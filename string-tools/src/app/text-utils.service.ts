import { Injectable } from '@angular/core';
import { isArray } from "util";

@Injectable({
  providedIn: 'root'
})
export class TextUtilsService {

  constructor() { }

  LinesToText(lines : string[]) {
    return lines.join("\r\n");
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
}
