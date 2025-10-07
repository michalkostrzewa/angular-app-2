import { Component, Input, signal, Output, EventEmitter } from "@angular/core";
import { Ticket } from "./ticket.model";

@Component({
  selector: "app-ticket",
  standalone: true,
  imports: [],
  templateUrl: "./ticket.component.html",
  styleUrl: "./ticket.component.css",
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;
  @Output() close = new EventEmitter<{ title: string; text: string }>();

  detailsVisable = signal(false);
  onToggleDetails() {
    this.detailsVisable.set(!this.detailsVisable());
    // this.detailsVisable.update((wasVidable) => !wasVidable);
  }

  onMarkAsComplited() {
    this.close.emit();
  }
}
