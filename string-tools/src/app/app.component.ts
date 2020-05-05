import { Component } from "@angular/core";
import { CommandService } from './command.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  h1 = "string-tools";
  outputValue = "";

  constructor(private commandService : CommandService) {
    this.commandService = commandService;
  }

  ProcessClick(codeValue: string, inputValue: string) {
    this.outputValue = this.commandService.processCommands(codeValue, inputValue).join("\r\n");
  }
} 