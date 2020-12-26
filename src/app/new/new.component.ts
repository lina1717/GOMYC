import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  color ='red' 
  constructor() { }

  ngOnInit(): void {
  }
  
changethecolor(kk: string) {
this.color='white';
  

}
click(){
  this.color='black'
}
  

}
