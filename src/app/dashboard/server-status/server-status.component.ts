import { Component, OnDestroy, OnInit } from "@angular/core";

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
  currentStatus: Status = Status.Online;
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = Status.Online;
      } else if (rnd < 0.8) {
        this.currentStatus = Status.Offline;
      } else {
        this.currentStatus = Status.Unknow;
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
