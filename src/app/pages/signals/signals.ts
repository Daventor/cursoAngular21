import { Component, inject } from '@angular/core';
import { ClassSignals } from "../../signals/class-signals/class-signals";
import { CounterState } from '../../signals/class-signals/counter-state';

@Component({
  selector: 'app-signals',
  imports: [ClassSignals],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  state = inject(CounterState);

  readonly count = this.state.count;
}
