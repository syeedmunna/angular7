import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  createEmployee(employee: any) {
    console.log(employee);
    return this.http.post(
      "http://localhost:3000/employee/create-employee",
      employee
    );
  }

  listEmployee() {
    return this.http.get("http://localhost:3000/employee/list-employee");
  }

  viewEmployee(empId: string) {
    return this.http.get(
      `http://localhost:3000/employee/view-employee/${empId}`
    );
  }
}
