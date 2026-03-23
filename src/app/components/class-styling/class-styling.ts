import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-class-styling',
  imports: [],
  templateUrl: './class-styling.html',
  styleUrl: './class-styling.css',
   // Esta es la encapsulación por defecto
  //encapsulation: ViewEncapsulation.Emulated
  // Si elegimos este modo, el estilo se vuelve global (y pisa al global)
  //encapsulation: ViewEncapsulation.None
  // Esta lo que hace es aislar totalemente el componente
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ClassStyling {

}
