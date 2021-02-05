import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../list-card/Person';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  p1=new Person(1,'sellaouti','loulouu',37,7777 ,'teacher')
  p2=new Person(2,'sahli','doudi', 32,7777 ,'teacher')
  @Input() nameItem ="lina" ;
  @Input() path = "'Aymenjpg.jpg'"
  @Input() description = "1"
  personnes : Person[] =[this.p1,this.p2];
  constructor() { }

  @Output() sendDatatoList = new EventEmitter()

  sendData(){
    this.sendDatatoList.emit({
      name : this.nameItem,
      path : this.path,
      desc : this.description
    })
  }

  

 ngOnInit(): void {
  this.personnes=[
new Person(1,'sellaouti','aymen',37,7777 ,'teacher'),
new Person(2,'sahli','ameni', 82,465 ,'teacher')

  ]
}
}





