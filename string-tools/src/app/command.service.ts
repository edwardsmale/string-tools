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
  
  processCommands(codeValue: string, inputValue: string, explain: boolean): string[] {
    var codeLines = this.textUtilsService.TextToLines(codeValue);
    var lines = this.textUtilsService.TextToLines(inputValue);
    var i: number;
    var j: number;

    var context = {
      isTabDelimited: this.textUtilsService.IsTabDelimited(lines),
      regex: (null as string),
      searchString: (null as string)
    };

    var currentValues: (string | string[])[] = lines;

    for (i = 0; i < codeLines.length; i++) {

      var parsedCommand = this.commandParsingService.ParseCodeLine(
        codeLines[i]
      );

      var newValues: (string | string[])[] = [];

      for (j = 0; j < currentValues.length; j++) {
        const newLineValue = parsedCommand.commandType.exec(
          currentValues[j], 
          parsedCommand.para, 
          context,
          explain
        );

        if (newLineValue !== null) {
          newValues.push(newLineValue);
        }
      }

      currentValues = newValues;
    }

    var outputLines: string[] = [];

    if (explain) {
      for (i = 0; i < codeLines.length; i++) {
        var parsedCommand = this.commandParsingService.ParseCodeLine(codeLines[i]);
        var commandType = parsedCommand.commandType;
        var para = parsedCommand.para;
        var explanation = parsedCommand.commandType.exec(lines, para, context, true);
        outputLines.push(explanation);
      }
  
      return outputLines;
    } else {

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
}