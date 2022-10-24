import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ayuda-principal',
  templateUrl: './ayuda-principal.component.html',
  styleUrls: ['./ayuda-principal.component.css']
})
export class AyudaPrincipalComponent implements OnInit {

  constructor(private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Página de ayuda");
  }

}
