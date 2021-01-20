import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
@HostBinding('style.color') couleur:any;
@HostBinding('style.borderColor') bc:any;
generateRandomColor():string{

  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
@HostListener('keyup') changeColor(){
  this.bc=this.generateRandomColor()
  this.couleur=this.generateRandomColor()
}
  constructor() { }
  @Input() out ='yellow'
  @Input() in ='red'
  @HostBinding('style.backgroundColor') bg:any;
  @HostListener('mouseenter') enter(){
    this.bg=this.in;
  }
  @HostListener('mouseleave') leave(){
    this.bg=this.out;
  }

}
