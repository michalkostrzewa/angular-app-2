import { Component, effect, OnDestroy, OnInit, signal } from "@angular/core";

enum Status {
  Online = "online",
  Offline = "offline",
  Unknow = "unknow",
}

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<Status>(Status.Online);
  private interval?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set(Status.Online);
      } else if (rnd < 0.8) {
        this.currentStatus.set(Status.Offline);
      } else {
        this.currentStatus.set(Status.Unknow);
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
