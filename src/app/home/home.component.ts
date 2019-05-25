import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title: string;
  isDisabled: boolean;
  imagePath: string;
  name:string;
  constructor() {}

  ngOnInit() {
    this.title = "Welcome to home page";
    this.imagePath = "../../assets/images/dog.jpg";
    this.isDisabled = false;
    this.name = "Raj";

  }

  toggleMe() {
    this.title = "Home page changed due to click event";
    this.isDisabled = true;
    console.log(this.name);
  }
}
