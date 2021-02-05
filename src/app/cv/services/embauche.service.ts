import { Injectable } from '@angular/core';
import { Person } from 'src/app/list-card/Person';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
private embauchees !: Person[] 
  constructor() { }

  getEmbauchees():Person[] {
return this.embauchees ;
  }
  embaucher(personne :Person){
    const index =this.embauchees.indexOf(personne);
    if(index===-1){
      this.embauchees.push(personne);
    }
  else{
  alert('${personne.name}est deja selectionnee ')

  }
  }

  
}
