import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../list-card/Person';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  perC=null;
  sendP(p:any){
    this.perC=p;
  }

p1=new Person(1,'sellaouti','aymen',37,7777 ,'teacher')
p2=new Person(2,'sahli','lina', 32,7777 ,'teacher')


@Input() personnes : Person[]=[this.p1,this.p2];
@Output() forwardPersonne =new EventEmitter();
  
  @Input() personC : any  ;
  @Output() selectedPersonne =new EventEmitter(); 


  nom ='Sellaouti' 
  prenom="Aymen"
  en="Enseignant"
  c="tant qu'il y'a de la vie il y'a de l'espoirrrrrrr"
  v="J'enseigne aux étudiants les technos du Web  "
  mc="HTML,CSS,Angular,Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others.."
  constructor() { }

  ngOnInit(): void {
  }
  selectPersonFromItem(Person:Person){
    this.forwardPersonne.emit(Person);
}
}
