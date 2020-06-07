import { Injectable } from '@angular/core';
import { isArray } from "util";
import { TextUtilsService } from './text-utils.service';
import { CommandTypesService } from './command-types.service';

@Injectable({
  providedIn: 'root'
})
export class CommandParsingService {

  constructor(private textUtilsService : TextUtilsService, private commandTypesService : CommandTypesService) {
    this.textUtilsService = textUtilsService;
    this.commandTypesService = commandTypesService;
  }

  ParseCodeLine(codeLine: string) {
    var codeLine = codeLine.trim();
    if (codeLine.length === 0) {
      return {
        commandType: this.commandTypesService.FindCommandType("noop"),
        para: ""
      };
    } else {
      var codeLineSplit = codeLine.split(/\s+/);
      var commandName = codeLineSplit[0];
      var commandType = this.commandTypesService.FindCommandType(commandName);
      var para = codeLine.replace(commandName, "").trim();
      return {
        commandType: commandType,
        para: para
      };
    }
  }
}