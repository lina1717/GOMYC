import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  nom ='Sellaouti' 
  prenom="Aymen"
  en="Enseignant"
  c="tant qu'il y'a de la vie il y'a de l'espoirrrrrrr"
  v="J'enseigne aux étudiants les technos du Web  "
  mc="HTML,CSS,Angular,Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others.."
  constructor() { }

  ngOnInit(): void {
  }

}
