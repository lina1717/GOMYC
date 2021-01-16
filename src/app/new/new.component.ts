import { Component, OnInit , Input, Output} from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() personC : any  ;

}
