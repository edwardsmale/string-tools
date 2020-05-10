import { 
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked } from "@angular/core";
import { CommandService } from './command.service';
import { TextUtilsService } from './text-utils.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild("codePane") codePaneRef: ElementRef;
  @ViewChild("inputPane") inputPaneRef: ElementRef;
  h1 = "string-tools";
  outputValue = "";
  explain = "";

  constructor(private commandService : CommandService, private textUtilsService : TextUtilsService) {
    this.commandService = commandService;
    this.textUtilsService = textUtilsService;
  }

  ngOnInit() {  }

  ngAfterViewChecked() {
    this.UpdateExplanation(
      this.codePaneRef.nativeElement.value, 
      this.inputPaneRef.nativeElement.value
    );
    this.ProcessClick(
      this.codePaneRef.nativeElement.value, 
      this.inputPaneRef.nativeElement.value
    );
  }

  UpdateExplanation(codeValue: string, inputValue: string) {
    this.explain = this.commandService.explainCommands(codeValue, inputValue);
  }

  ProcessClick(codeValue: string, inputValue: string) {
    var lines = this.commandService.processCommands(codeValue, inputValue);
    this.outputValue = this.textUtilsService.LinesToText(lines);
  }
} 