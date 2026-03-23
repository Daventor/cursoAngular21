import { Component, signal } from '@angular/core';
import { ClassSelector } from "../../components/class-selector/class-selector";
import { ClassStyling } from "../../components/class-styling/class-styling";
import { ClassInputs } from "../../components/class-inputs/class-inputs";
import { ClassOutputs } from "../../components/class-outputs/class-outputs";
import { ClassProjection } from "../../components/class-projection/class-projection";
import { ClassProjectionTitle } from "../../components/class-projection-title/class-projection-title";
import { ClassProjectionBody } from "../../components/class-projection-body/class-projection-body";

@Component({
  selector: 'app-components',
  imports: [ClassSelector, ClassStyling, ClassInputs, ClassOutputs, ClassProjection, ClassProjectionTitle, ClassProjectionBody],
  templateUrl: './components.html',
  styleUrl: './components.css',
})
export class Components {
  protected credits = signal(0);

  btnClickHandler():void{
    console.log("Clicked en hijo !!");
    
  }

  btnPrimitiveHandler(value: number){
    console.log(`Recibido ${value} desde el hijo`);
    
  }

  btnObjectHandler(myUser: object){
    console.log(myUser);
    
  }
}
