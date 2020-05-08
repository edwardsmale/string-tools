import { Injectable } from '@angular/core';
import { isArray } from "util";
import { TextUtilsService } from './text-utils.service';
import { CommandParsingService } from './command-parsing.service';
import { CommandTypesService } from './command-types.service';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private textUtilsService : TextUtilsService, private commandParsingService : CommandParsingService, private commandTypesService : CommandTypesService) {
    this.textUtilsService = textUtilsService;
    this.commandParsingService = commandParsingService;
    this.commandTypesService = commandTypesService;
  }

  explainCommands(codeValue: string, inputValue: string): string {
    var codeLines = this.textUtilsService.TextToLines(codeValue);
    var lines = this.textUtilsService.TextToLines(inputValue);
    var outputLines = [];
    var i: number;

    var isTabDelimited = this.textUtilsService.IsTabDelimited(lines);

    for (i = 0; i < codeLines.length; i++) {
      var parsedCommand = this.commandParsingService.ParseCodeLine(codeLines[i]);
      var commandType = parsedCommand.commandType;
      var para = parsedCommand.para;
      var explanation = parsedCommand.commandType.explain(para, isTabDelimited);
      outputLines.push(explanation);
    }

    return this.textUtilsService.LinesToText(outputLines);
  }
  
  processCommands(codeValue: string, inputValue: string) {
    var codeLines = codeValue.trim().split(/\n/);
    var lines = inputValue.trim().split(/\n/);
    var outputLines = [];
    var i: number;
    var j: number;

    var isTabDelimited = this.textUtilsService.IsTabDelimited(lines);

    for (j = 0; j < lines.length; j++) {
      var currentValue: string | string[] = lines[j];
      for (i = 0; i < codeLines.length; i++) {

        var parsedCommand = this.commandParsingService.ParseCodeLine(codeLines[i]);
        var commandType = parsedCommand.commandType;
        var para = parsedCommand.para;
        currentValue = commandType.exec(currentValue, para, isTabDelimited);
      }

      if (isArray(currentValue)) {
        outputLines.push(currentValue.join(" "));
      } else {
        outputLines.push(currentValue);
      }
    }
    return outputLines;
  }
}
