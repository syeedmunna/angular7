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

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatRadioModule, MatCardModule
} from "@angular/material";
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    SqrtPipe,
    NavigationComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
