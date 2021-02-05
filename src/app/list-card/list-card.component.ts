import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { CvService } from '../cv/services/cv.service';
import { Person } from '../list-card/Person';


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

 // perC=null;
  //sendP(p:any){
   // this.perC=p;
  //}
 // p1=new Person(1,'sellaouti','aymen',37,7777 ,'teacher')
 // p2=new Person(2,'sahli','lina', 32,7777 ,'teacher')
  //p3=new Person(3,'sahli','ameni', 82,465 ,'teacher')
  personnes: Person[] = [];


 constructor() { }

 @Output() sendDatatoCv = new EventEmitter() ;

 processList(value: any) {
   this.sendDatatoCv.emit(value)
 }


 ngOnInit(): void {
   this.personnes=[
 new Person(1,'sellaouti','aymen',37,7777 ,'teacher'),
 new Person(2,'sahli','ameni', 82,465 ,'teacher')
 
   ]
 }

}


