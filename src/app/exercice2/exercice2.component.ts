import { Component, OnInit, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
   public valeur = '';
 
   @ViewChild("texte",{static:true}) element:ElementRef;

  constructor() {
   }

  ngOnInit() {
  }

  onKey() {
    this.valeur = this.element.nativeElement.value;
  }
}
