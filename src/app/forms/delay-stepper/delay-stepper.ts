import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-delay-stepper',
  imports: [],
  templateUrl: './delay-stepper.html',
  styleUrl: './delay-stepper.css',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DelayStepper implements FormValueControl<number>{
  readonly value = model(0)
  readonly touched = model<boolean>(false);
  readonly disabled = input(false)

  protected inc(e: PointerEvent){
    e.preventDefault();
    this.value.update((v) => v + 15);
    this.touched.set(true);
  }

  protected dec(e: PointerEvent){
    e.preventDefault();
    this.value.update((v) => v - 15);
    this.touched.set(true);
  }
}
