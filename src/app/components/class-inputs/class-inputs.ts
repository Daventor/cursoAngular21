import { Component, Input, input, model } from '@angular/core';

@Component({
  selector: 'app-class-inputs',
  imports: [],
  templateUrl: './class-inputs.html',
  styleUrl: './class-inputs.css',
  //inputs: [disabled, 'aliasForDisabled']
})
export class ClassInputs {
  value = input(10);
  otherValue = input<number>();
  anotherValue = input.required<number>();

  label = input('', {transform: transformToUpper});

  price = input('', {transform: this.appendEuro});

  myVar = input(0, {alias: 'finalValue'});

  modelValue = model(0);

  @Input()
  get decoValue(): number{
    return this.internalValue;
  }

  private internalValue = 0;

  appendEuro(value:number):string{
    return `${value.toFixed(2)} €`;
  }

  increment(){
    this.modelValue.update((oldValue) => oldValue + 1);
  }
}



function transformToUpper(value:string | undefined): string {
  return value?.toUpperCase() ?? '';
}