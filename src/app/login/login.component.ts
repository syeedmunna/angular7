import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}
  logout() {
    this.employeeService.logout();
  }
}
