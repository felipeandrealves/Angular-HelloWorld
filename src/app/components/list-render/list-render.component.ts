import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {
      id: '1ji2bnnro1i3',
      name: 'Pingo',
      type: 'Dog',
      age: 8,
      castrated: false,
      vaccinated: true,
      weight: 3.2,
    },
    {
      id: '1ji2bnnro1i4',
      name: 'Mazeking',
      type: 'Cat',
      age: 3,
      castrated: true,
      vaccinated: true,
      weight: 1.8,
    },
    {
      id: '1ji2bnnro1i5',
      name: 'Nina',
      type: 'Cat',
      age: 2,
      castrated: true,
      vaccinated: true,
      weight: 2.5,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
