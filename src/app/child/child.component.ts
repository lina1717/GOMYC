import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() send =new EventEmitter();

@Input() parentcolor: any;
  constructor() { }

  ngOnInit(): void {
  }
  sendto(){
    this.send.emit('je suis la couleur bla bla');
  }
}
