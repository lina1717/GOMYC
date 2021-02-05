import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmbaucheService } from '../cv/services/embauche.service';
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

p1=new Person(1,'sellaouti','loulouu',37,7777 ,'teacher')
p2=new Person(2,'sahli','doudi', 32,7777 ,'teacher')


@Input() personnes : Person[]=[this.p1,this.p2];
@Output() forwardPersonne =new EventEmitter();
  
  @Input() personC : any  ;
  @Output() selectedPersonne =new EventEmitter(); 
 @Input() personne :any;
 sendData(){}
 @Input() nameItem ="";
 @Input() pathItem ="" ;
 @Input() descriItem =""


 processData(obj: { name: string; path: string; desc: string; }){
   this.nameItem = obj.name ;
   this.pathItem = obj.path ;
   this.descriItem = obj.desc
 }
  //nom ='Sellaouti' 
  //prenom="Aymen"
 // en="Enseignant"
  //c="tant qu'il y'a de la vie il y'a de l'espoirrrrrrr"
 // v="J'enseigne aux étudiants les technos du Web  "
 // mc="HTML,CSS,Angular,Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others.."
  constructor(
    private embaucheService: EmbaucheService
  ) {}

  ngOnInit(): void {
  }
  selectPersonFromItem(Person:Person){
    this.forwardPersonne.emit(Person);
}

embaucher(){
this.embaucheService.embaucher(this.personne)
}




@Input() name ="nknn" ;
@Input() job = "njjhk" ;
@Input() description = "kkonh";
@Input() path = "";

}

