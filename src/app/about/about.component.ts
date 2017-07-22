import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageName: string;
  clickColor: string;
  colorName: string;

  constructor() { }

  ngOnInit() {
    this.pageName = "About";
    this.clickColor = "Red";
  }

  changeColor() {
    this.clickColor = this.colorName || "LimeGreen";
  }

}
