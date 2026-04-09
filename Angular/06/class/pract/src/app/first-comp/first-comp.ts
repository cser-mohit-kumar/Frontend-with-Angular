import { Component, inject } from '@angular/core';
import { Childcomp } from "./childcomp/childcomp";
import { NgClass, NgForOf } from "@angular/common";
import {Service} from '../../service/service';


@Component({
  selector: 'app-first-comp',
  imports: [Childcomp, NgClass, NgForOf],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
  providers:[Service]
})
export class FirstComp {
  // name:string="QWERTY"
  // style:string='color:red;'
  // isHidden:boolean=false
  // click(){
  //   console.log(this.isHidden)
  //   this.isHidden=!this.isHidden
  // }

  // currentIndex: number = 0;

  // items: string[] = [
  //   'Div 1',
  //   'Div 2',
  //   'Div 3',
  //   'Div 4',
  //   'Div 5'
  // ];

  // next(): void {
  //   if (this.currentIndex < this.items.length - 1) {
  //     this.currentIndex++;
  //   }
  // }

  // prev(): void {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //   }
  // }

  // name:string="From parent";
  // change(){
  //   this.name="parent given name"
  // }
  

  // d:string=''
  // handleData(data:any){
  //   this.d=data
  //   console.log(data);
    
  // }


  // applyClass:boolean=false
  //   shouldApply(){
  //     this.applyClass=!this.applyClass
  //   }

  // arr:number[]=[1,2,3,4,5,6,7,8,9,10]
  // user:string='ad'

  d:Service
  constructor(protected data : Service){
    this.d=data
  }
  service=inject(Service)

}
