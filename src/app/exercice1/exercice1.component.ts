import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  resultat: number = 0; 

  constructor() { }

  ngOnInit() {
  }
  up(event) {
    this.resultat = event.value;
  }
}
