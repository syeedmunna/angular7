import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.css"]
})
export class EmployeeFormComponent {
  constructor(private fb: FormBuilder) {}

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ])
    ],
    employeeId: [null, Validators.required]
  });

  hasUnitNumber = false;

  states = [
    { name: "Karnataka", abbreviation: "KA" },
    { name: "Andra Pradesh", abbreviation: "AP" },
    { name: "Telangana", abbreviation: "TS" }
  ];

  onSubmit() {
    alert("Thanks!");
  }
}
