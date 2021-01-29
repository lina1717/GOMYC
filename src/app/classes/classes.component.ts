import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  theme='theme1';

  loggerService: any;
  constructor(
    loggerService: LoggerService
  ) { }

  ngOnInit(): void {
    this.loggerService.logger('salut je suis cv service')
  }
  changetheme(theme: string){
    this.theme = theme ;

  }

}
