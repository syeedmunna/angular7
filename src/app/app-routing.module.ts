import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "employee", component: EmployeeFormComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
