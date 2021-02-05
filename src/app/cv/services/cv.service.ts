import { Injectable, Input } from '@angular/core';
import { Person } from 'src/app/list-card/Person';

@Injectable({
  providedIn: 'root'
})
export class CvService {
@Input() private  personnes: Person[];
  constructor(
    private cvService :CvService
  ) {
    this.personnes=[
    new Person(1,'sellaouti','aymen',37,88,"prof"),
    new Person(2,'selmi','anis',19,55,"etudiant")
    ]


   }
  ngOnInit(){
    this.personnes = this.cvService.getPersonnes();
  }
  getPersonnes() : Person[]{
  return this.personnes;
  }

}
