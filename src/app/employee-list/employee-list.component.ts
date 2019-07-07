import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";
import { WarningAlertComponent } from "../warning-alert/warning-alert.component";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  statusMessage: string;
  modalRef: BsModalRef;
  globalMessage: any;
  displayedColumns: string[] = [
    "firstName",
    "city",
    "state",
    "phoneNumber",
    "status"
  ];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.employeeService.currentMessage.subscribe(
      receiveMessage => (this.globalMessage = receiveMessage)
    );
    this.employeeService.listEmployee().subscribe(
      (success: any) => {
        console.log(success);
        this.dataSource = new MatTableDataSource<any>(success);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log("error");
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(empId: string) {
    this.modalRef = this.modalService.show(WarningAlertComponent);
    this.modalRef.content.param = empId;
  }
}
