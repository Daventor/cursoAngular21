import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-class-templating',
  imports: [],
  templateUrl: './class-templating.html',
  styleUrl: './class-templating.css',
})
export class ClassTemplating {
  dynamicText = 'texto dinámico';

  listClasses = "text-red ligth-shadow";
  arrayClasses = ['danger', 'full'];
  objectClasses = signal({
    'muted': true,
    'alert-success': false
  })

  isValidForm():boolean{
    return true;
  }

  listStyles = "border:2px solid red; padding: 15px;";
  objectStyles= {
    border: '1px solid black',
    'font-weight': 'bold'
  }
}
