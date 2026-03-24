import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterState {
  private readonly _count = signal(0);

  readonly count = this._count.asReadonly();

  increment():void{
    this._count.update(v => v + 1);
  }
}
