import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent{
  @Input('compteur') compteur;
  @Output() updateCompteur = new EventEmitter();
  
  constructor() { }

    incrementer() {
      this.compteur++;
      this.updateCompteur.emit({value:this.compteur});
    }
    
    decrementer() {
      this.compteur--;
      this.updateCompteur.emit({value:this.compteur});
    }
  }

