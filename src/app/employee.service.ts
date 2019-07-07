import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private messageSource = new BehaviorSubject(""); // BehaviorSuject is used to store latest values
  currentMessage = this.messageSource.asObservable();

  changeMessage(loginData: any) {
    this.messageSource.next(loginData);
  }

  logout() {
    this.messageSource.next("");
  }

  constructor(private http: HttpClient) {}

  createEmployee(employee: any) {
    console.log(employee);
    return this.http.post(
      "http://localhost:3000/employee/create-employee",
      employee
    );
  }
  updateEmployee(employee: any, empId: string) {
    console.log(employee);
    return this.http.put(
      `http://localhost:3000/employee/update-employee/${empId}`,
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
  deleteEmployee(empId: string) {
    return this.http.delete(
      `http://localhost:3000/employee/delete-employee/${empId}`
    );
  }
}
