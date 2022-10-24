import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMayusculas]'
})
export class MayusculasDirective implements OnInit {

  @Input() anchoBorde:any;

  constructor(private elemento:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(elemento.nativeElement, "text-transform", "uppercase");
    renderer.setStyle(elemento.nativeElement, "color", "#AACCBB");
    renderer.setStyle(elemento.nativeElement, "border-style", "solid");
  }
  ngOnInit(): void {
    //Se debe dejar en ngOnInit porque el @Input no existe hasta este método.
    this.renderer.setStyle(this.elemento.nativeElement, "border-width", this.anchoBorde);
  }

  @HostListener('mouseover') funcionEntrada(){
    this.renderer.setStyle(this.elemento.nativeElement, "color", "white");
  }
  @HostListener('mouseout') funcionSalida(){
    this.renderer.setStyle(this.elemento.nativeElement, "color", "#AACCBB");
  }

}
