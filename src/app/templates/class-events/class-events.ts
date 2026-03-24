import { Component } from '@angular/core';

@Component({
  selector: 'app-class-events',
  imports: [],
  templateUrl: './class-events.html',
  styleUrl: './class-events.css',
  host:{
    '(window:click)': 'updateField()'
  }
})
export class ClassEvents {
  updateField(){
    console.log('Se ha pulsado enter');
    
  }

  goToGoogle(event: PointerEvent){
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
}
