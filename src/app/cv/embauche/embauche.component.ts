import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/list-card/Person';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
@Input() embauchees!: Person[]
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
    this.embauchees=this.embaucheService.getEmbauchees();
  }

 hiredList: Person[] = [];
 
  getHired(): Person[] {
    return this.hiredList;
  }
  hire(personne: Person) {
   const index = this.hiredList.indexOf(personne);
    if (index < 0) {
     this.hiredList.push(personne);
    
    }
  }
}