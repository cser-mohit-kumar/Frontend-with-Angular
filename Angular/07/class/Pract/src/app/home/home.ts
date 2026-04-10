import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatTable,MatButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  data = [{
    id:1,
    name:'abcd',
    age:30,
    degree:"UG"
  },
  {
    id:2,
    name:'efgh',
    age:40,
    degree:"PG"
  },
  {
    id:3,
    name:'ijkl',
    age:20,
    degree:"UG"
  },
  ]
}
