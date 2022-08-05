import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Pingo', type: 'Dog' },
    { name: 'Mazeking', type: 'Cat' },
    { name: 'Nina', type: 'Cat' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
