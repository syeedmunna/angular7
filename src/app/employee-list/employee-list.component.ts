import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";

import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  statusMessage: string;
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
    private router: Router
  ) {}

  ngOnInit() {
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
    this.employeeService.deleteEmployee(empId).subscribe(
      (success: any) => {
        console.log(success.message);
        this.statusMessage = success.message;
        this.router.navigate(['/']);
      },
      error => {
        console.log("error");
      }
    );
  }
}
