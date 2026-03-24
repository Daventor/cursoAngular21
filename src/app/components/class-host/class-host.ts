import { Component, HostAttributeToken, inject, signal } from '@angular/core';

@Component({
  selector: '.app-class-host',
  imports: [],
  templateUrl: './class-host.html',
  styleUrl: './class-host.css',
  host:{
    'role':'test',
    '[attr.aria-testValue]': 'value',
    '[class.active]': 'isActive()',
    '[style.background]': `hasError()?'red':'cyan'`,
    '(keydown)':'updateValue($event)'
  }
})
export class ClassHost {
  readonly value:number = 23;
  isActive = signal(true);
  hasError = signal(true);

  updateValue(event: KeyboardEvent){
    console.log(event.code);
    
    console.log(this.myType);
    
  }

  myType = inject(new HostAttributeToken('type'), { optional: true });
}
