import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ChildComponent } from './child/child.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { CvComponent } from './cv/cv.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClassesComponent } from './classes/classes.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ListCardComponent } from './list-card/list-card.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ImageComponent } from './pipesComp/image/image.component';
import { LoggerService } from './services/logger.service';
import { TodoService } from './services/todo.service';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    CardComponent,
    ChildComponent,
    DetailComponentComponent,
    CvComponent,
    DirectiveComponent,
    ClassesComponent,
    RainbowDirective,
    ParagraphComponent,
    ListCardComponent,
    DefaultImagePipe,
    ImageComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [LoggerService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
