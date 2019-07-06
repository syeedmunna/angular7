import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeViewComponent } from "./employee-view/employee-view.component";
import { ParentComponent } from "./parent/parent.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "employee-form", component: EmployeeFormComponent },
  { path: "employee-list", component: EmployeeListComponent },
  { path: "employee-list/view/:empId", component: EmployeeViewComponent },
  { path: "employee-list/edit/:empId", component: EmployeeFormComponent },
  { path: "parent", component: ParentComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
