import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  name:string="QWERTY"
  style:string='color:red;'
  isHidden:boolean=false
  click(){
    console.log(this.isHidden)
    this.isHidden=!this.isHidden
  }

  currentIndex: number = 0;

  items: string[] = [
    'Div 1',
    'Div 2',
    'Div 3',
    'Div 4',
    'Div 5'
  ];

  next(): void {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }



}
