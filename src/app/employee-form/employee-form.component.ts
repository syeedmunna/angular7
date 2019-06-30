import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EmployeeService } from "../employee.service";
import { ActivatedRoute } from "@angular/router";
import { Employee } from "../employee.model";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.css"]
})
export class EmployeeFormComponent implements OnInit {
  statusMessage: string;
  employeeDetails: Employee;
  isDisableEmployee: boolean;
  myEmpId: string;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([Validators.required, Validators.pattern("[0-9]{6}")])
    ],
    employeeId: [null, Validators.required],
    phoneNumber: [
      null,
      Validators.compose([Validators.required, Validators.pattern("[0-9]{10}")])
    ],
    email: [null, Validators.compose([Validators.required, Validators.email])]
  });

  hasUnitNumber = false;

  states = [
    { name: "Karnataka", abbreviation: "KA" },
    { name: "Andra Pradesh", abbreviation: "AP" },
    { name: "Telangana", abbreviation: "TS" }
  ];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log("View id", params.id);
      this.myEmpId = params.empId;
      if (params.empId) {
        // console.log("Emp id", params.empId);
        this.employeeService.viewEmployee(params.empId).subscribe(
          (data: any) => {
            console.log(data);
            this.employeeDetails = data;
            this.isDisableEmployee = true;
            this.addressForm.patchValue({
              company: this.employeeDetails.company,
              firstName: this.employeeDetails.firstName,
              lastName: this.employeeDetails.lastName,
              address: this.employeeDetails.address,
              city: this.employeeDetails.city,
              state: this.employeeDetails.state,
              postalCode: this.employeeDetails.postalCode,
              employeeId: this.employeeDetails.employeeId,
              phoneNumber: this.employeeDetails.phoneNumber,
              email: this.employeeDetails.email
            });
          },
          err => {
            console.log(err);
          }
        );
      } else {
        this.isDisableEmployee = false;
      }
    });
  }
  onSubmit() {
    if (this.addressForm.invalid) {
      return false;
    }
    // console.log(this.addressForm.value);
    if (this.myEmpId) {
      // Update employee
      this.employeeService
        .updateEmployee(this.addressForm.value, this.myEmpId)
        .subscribe(
          (success: any) => {
            console.log(success.message);
            this.statusMessage = success.message;
          },
          error => {
            console.log("error");
          }
        );
    } else {
      // Create employee
      this.employeeService.createEmployee(this.addressForm.value).subscribe(
        (success: any) => {
          // console.log(success.message);
          this.statusMessage = success.message;
        },
        error => {
          console.log("error");
        }
      );
    }
  }
}
