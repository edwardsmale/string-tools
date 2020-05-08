import { Component } from "@angular/core";
import { CommandService } from './command.service';
import { TextUtilsService } from './text-utils.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  h1 = "string-tools";
  outputValue = "";

  constructor(private commandService : CommandService, private textUtilsService : TextUtilsService) {
    this.commandService = commandService;
    this.textUtilsService = textUtilsService;
  }

  ProcessClick(codeValue: string, inputValue: string) {
    var lines = this.commandService.processCommands(codeValue, inputValue);
    this.outputValue = this.textUtilsService.LinesToText(lines);
  }
} 