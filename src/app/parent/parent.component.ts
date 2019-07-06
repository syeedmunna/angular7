import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  parentMessage: string;
  childMessage: string;
  constructor() {
    this.parentMessage = "Message from parent, hello my child";
  }

  receiveMessage($event: string) {
    this.childMessage = $event;
  }
  ngOnInit() {}
}
