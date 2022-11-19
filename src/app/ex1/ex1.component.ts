import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css'],
})
export class Ex1Component implements OnInit {
  text: string;
  color: string;
  fontFamily: string;
  fontSize: number;
  constructor() {
    this.text = 'Sample Text';
    this.color = 'black';
    this.fontFamily = 'Verdana';
    this.fontSize = 32;
  }
  ngOnInit(): void {}
}
