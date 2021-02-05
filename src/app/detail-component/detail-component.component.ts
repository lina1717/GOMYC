import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
  enter(e: any) {
    console.log("enter");
}

@Input() personC : any  ;


  constructor() { }

  ngOnInit(): void {
  }

}
