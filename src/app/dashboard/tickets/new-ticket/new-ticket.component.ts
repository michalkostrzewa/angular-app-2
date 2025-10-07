import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  viewChild,
  ViewChild,
  Output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild("form") form?: ElementRef<HTMLFormElement>;
  // private form = viewChild<ElementRef<HTMLFormElement>>("form");
  @Output() add = new EventEmitter<{ title: string; text: string }>();

  ngAfterViewInit() {
    console.log("after ciew init");
  }

  onSubmit(title: string, text: string) {
    this.add.emit({ title: title, text: text });
    this.form?.nativeElement.reset();
  }
}
