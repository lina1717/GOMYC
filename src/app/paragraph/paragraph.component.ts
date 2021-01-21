import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
IsShown=true
  constructor() { }

  ngOnInit(): void {
  }
  ShowHide(){
this.IsShown = !this.IsShown
  }
}
