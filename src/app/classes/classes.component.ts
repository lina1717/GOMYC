import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  theme='theme1';



  constructor() { }

  ngOnInit(): void {
  }
  changetheme(theme: string){
    this.theme = theme ;

  }

}
