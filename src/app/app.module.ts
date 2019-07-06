import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { SqrtPipe } from "./sqrt.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatRadioModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from "@angular/material";
import { ModalModule } from "ngx-bootstrap";

import { NavigationComponent } from "./navigation/navigation.component";
import { LayoutModule } from "@angular/cdk/layout";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { EmployeeService } from "./employee.service";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeViewComponent } from "./employee-view/employee-view.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    SqrtPipe,
    NavigationComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeViewComponent,
    WarningAlertComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [WarningAlertComponent]
})
export class AppModule {}
