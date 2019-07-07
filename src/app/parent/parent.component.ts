import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  parentMessage: string;
  childMessage: string;
  globalMessage: any;
  constructor(private employeeService: EmployeeService) {
    this.parentMessage = "Message from parent, hello my child";
  }

  receiveMessage($event: string) {
    this.childMessage = $event;
  }
  ngOnInit() {
    this.employeeService.currentMessage.subscribe(
      receiveMessage => (this.globalMessage = receiveMessage)
    );
  }
}
