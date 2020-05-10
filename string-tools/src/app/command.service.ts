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
    var i: number;
    var j: number;

    var isTabDelimited = this.textUtilsService.IsTabDelimited(lines);

    var currentValues: (string | string[])[] = lines;

    for (i = 0; i < codeLines.length; i++) {

      var parsedCommand = this.commandParsingService.ParseCodeLine(codeLines[i]);
      var commandType = parsedCommand.commandType;
      var para = parsedCommand.para;

      var newValues: (string | string[])[] = [];

      for (j = 0; j < currentValues.length; j++) {
        const newLineValue = commandType.exec(currentValues[j], para, isTabDelimited);
        newValues.push(newLineValue);
      }

      currentValues = newValues;
    }

    var outputLines: string[] = [];

    for (i = 0; i < currentValues.length; i++) {
      var value = currentValues[i];
      if (isArray(value)) {
        var arrayValue = value as string[];
        for (j = 0; j < arrayValue.length; j++) {
          outputLines.push(arrayValue[j]);
        }
      } else {
        outputLines.push(value as string);
      }
    }

    return outputLines;
  }
}
