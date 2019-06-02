import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.css"]
})
export class EmployeeFormComponent {
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
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

  onSubmit() {
    if (this.addressForm.invalid) {
      return false;
    }
    // console.log(this.addressForm.value);
    this.employeeService.createEmployee(this.addressForm.value)
    .subscribe(
      success => {
        console.log("success");
      },
      error => {
        console.log("error");
      }
    );
  }
}
