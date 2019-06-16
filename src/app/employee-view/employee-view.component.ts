import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-view",
  templateUrl: "./employee-view.component.html",
  styleUrls: ["./employee-view.component.css"]
})
export class EmployeeViewComponent implements OnInit {
  employeeDetails: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log("View id", params.id);
      if (params.empId) {
        console.log(params.empId);
        this.employeeService.viewEmployee(params.empId).subscribe(
          (data: any) => {
            // console.log(data);
            this.employeeDetails = data;
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
