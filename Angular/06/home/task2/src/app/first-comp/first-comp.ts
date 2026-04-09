 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-comp.html',
  styleUrls: ['./first-comp.css'],
})
export class FirstComp {
  viewType: string = 'table'; // default view

  students = [
    { name: 'abc', roll: 1, mobile: 1234567890 },
    { name: 'def', roll: 2, mobile: 9999999999 },
    { name: 'ghi', roll: 3, mobile: 9876543210 }
  ];

  changeView(view: string) {
    this.viewType = view;
  }
}




