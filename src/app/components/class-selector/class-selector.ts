import { Component } from '@angular/core';

@Component({
  //selector: 'button[test-selector]',
  // Selector por atributo 
  //selector: 'button[type="reset"]',
  // Y por estilo
  //selector: '.this-one',
  // También podemos excluir
  //selector: '.this-one:not(button)',
  // O poner varios selectores.
  selector: '.this-one, test-selector',
  imports: [],
  templateUrl: './class-selector.html',
  styleUrl: './class-selector.css',
})
export class ClassSelector {

}
