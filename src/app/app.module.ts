import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ChildComponent } from './child/child.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { CvComponent } from './cv/cv.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClassesComponent } from './classes/classes.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { ParagraphComponent } from './paragraph/paragraph.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    CardComponent,
    ChildComponent,
    ListComponentComponent,
    DetailComponentComponent,
    CvComponent,
    DirectiveComponent,
    ClassesComponent,
    RainbowDirective,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
