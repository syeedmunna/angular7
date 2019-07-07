import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}
  storeData() {
    const loginInfo = {
      name: "Siddu",
      empId: 102030
    };
    this.employeeService.changeMessage(loginInfo);
  }
}
