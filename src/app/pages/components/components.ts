import { Component, signal, viewChild } from '@angular/core';
import { ClassSelector } from "../../components/class-selector/class-selector";
import { ClassStyling } from "../../components/class-styling/class-styling";
import { ClassInputs } from "../../components/class-inputs/class-inputs";
import { ClassOutputs } from "../../components/class-outputs/class-outputs";
import { ClassProjection } from "../../components/class-projection/class-projection";
import { ClassProjectionTitle } from "../../components/class-projection-title/class-projection-title";
import { ClassProjectionBody } from "../../components/class-projection-body/class-projection-body";
import { ClassHost } from "../../components/class-host/class-host";
import { ClassLifecycle } from '../../components/class-lifecycle/class-lifecycle';
import { ClassReferencing } from '../../components/class-referencing/class-referencing';

@Component({
  selector: 'app-components',
  imports: [ClassLifecycle, ClassReferencing, ClassHost],
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

  protected showLifeCycleComponent = signal(true);

  toggleShowLifeCycleComponent(): void{
    this.showLifeCycleComponent.set(!this.showLifeCycleComponent());
  }

  protected myUserId = signal(24);

  changeUserId(): void{
    this.myUserId.set(Math.floor(Math.random() * 100));
  }

  myComp = viewChild<ClassHost>('myComp');

  ngAfterViewInit(){
    console.log(this.myComp()?.value)
  }
}
