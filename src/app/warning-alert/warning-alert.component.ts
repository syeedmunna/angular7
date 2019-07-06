import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-warning-alert",
  templateUrl: "./warning-alert.component.html",
  styleUrls: ["./warning-alert.component.css"]
})
export class WarningAlertComponent implements OnInit {
  param: string;
  constructor(
    public bsModalRef: BsModalRef,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {}

  confirm() {
    this.employeeService.deleteEmployee(this.param).subscribe(
      (success: any) => {
        console.log(success.message);
        // this.statusMessage = success.message;
        this.bsModalRef.hide();
        this.router.navigate(["/"]);
      },
      error => {
        console.log("error");
      }
    );
  }
  decline(): void {
    this.bsModalRef.hide();
  }
}
