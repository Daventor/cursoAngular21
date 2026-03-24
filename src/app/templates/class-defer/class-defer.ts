import { Component } from '@angular/core';
import { ClassComp } from "../class-comp/class-comp";

@Component({
  selector: 'app-class-defer',
  imports: [ClassComp],
  templateUrl: './class-defer.html',
  styleUrl: './class-defer.css',
})
export class ClassDefer {
  enableComponent = false;

  toggleEnableComponent(): void{
    this.enableComponent = true;
  }
}
