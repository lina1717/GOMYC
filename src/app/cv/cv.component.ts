import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../cv/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  perC=null;
  p1=new Personne(1,'lina','sahli',23, 123, 'etd','yy')
  p2=new Personne(2,'ahmed','sahli',32, 528, 'etd','yy')
  p3=new Personne(3,'Souraya','mrad',19, 222, 'etd','yy')

 cv: Personne[]=[this.p1,this.p2,this.p3 ];

  // {id:2,name:'siwar',firstname:'aabidi',age:23, cin:123, job:'etd',path:'yy'},
  // {id:3,name:'amine',firstname:'khlil',age:23, cin:123, job:'etd',path:'yy'},

 sendP(p:any){
   this.perC=p;
 }

}

