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
  name: string;
  fruits = [];
  lowerCasePipeName: string;
  todayDate = new Date();
  constructor() {
    this.lowerCasePipeName = "HELLO ANGULAR";
  }

  ngOnInit() {
    this.title = "Welcome to home page";
    this.imagePath = "../../assets/images/dog.jpg";
    this.isDisabled = false;
    this.name = "Raj";
    this.fruits = [
      { name: "Orange", price: 50, display: true },
      { name: "Apple", price: 80, display: false },
      { name: "Banana", price: 90, display: false },
      { name: "Grapes", price: 150, display: true },
      { name: "Mango", price: 20, display: false }
    ];
  }

  toggleMe() {
    this.title = "Home page changed due to click event";
    this.isDisabled = true;
    console.log(this.name);
  }
}
