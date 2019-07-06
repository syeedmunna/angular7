import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../employee.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { WarningAlertComponent } from "../warning-alert/warning-alert.component";

@Component({
  selector: "app-employee-view",
  templateUrl: "./employee-view.component.html",
  styleUrls: ["./employee-view.component.css"]
})
export class EmployeeViewComponent implements OnInit {
  employeeDetails: any;
  modalRef: BsModalRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
    private modalService: BsModalService
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

  deleteEmployee(empId: string) {
    this.modalRef = this.modalService.show(WarningAlertComponent);
    this.modalRef.content.param = empId;
  }
}
