import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-component',
  templateUrl: './if-component.component.html',
  styleUrls: ['./if-component.component.css'],
})
export class IfComponentComponent implements OnInit {
  cep: string = '13451-137';

  constructor() {}

  ngOnInit(): void {}
}
