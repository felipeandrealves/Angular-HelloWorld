import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emmitter',
  templateUrl: './emmitter.component.html',
  styleUrls: ['./emmitter.component.css'],
})
export class EmmitterComponent implements OnInit {
  myNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
