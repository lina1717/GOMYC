import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  changethecolor(kk: string) {
    this.favoritecolor='blue';
    }
    click(){
      this.favoritecolor='blue'
    }
  @Input()
  favoritecolor = 'blue';

  sendP(p:any){
    this.favoritecolor=p;
  }


  constructor() { }
  

  ngOnInit(): void {
  }
  
}
