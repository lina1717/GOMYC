import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { Person } from '../list-card/Person';


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  perC=null;
  sendP(p:any){
    this.perC=p;
  }



  p1=new Person(1,'sellaouti','aymen',37,7777 ,'teacher')
  p2=new Person(2,'sahli','lina', 32,7777 ,'teacher')
personnes : Person[]=[this.p1,this.p2];
@Output() forwardPersonne =new EventEmitter();
  constructor() { }

  ngOnInit(){
 
  }
    selectPersonFromItem(personne:Person){
    this.forwardPersonne.emit(personne);
    
    }
}
