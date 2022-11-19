import { Directive, ElementRef, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  color:string = ""
  colorTab: string[] = ["blue", "red", "pink", "green", "teal", "yellow"]
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '2px solid';
  }

  @HostListener('keyup') changeColor() {
    this.el.nativeElement.style.backgroundColor = this.colorTab[ Math.floor(Math.random() * 5)]
    this.el.nativeElement.style.borderColor = this.colorTab[ Math.floor(Math.random() * 5)]
  }

}
