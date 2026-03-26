import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserAuthentication } from '../../user-authentication';

@Component({
  selector: 'app-testing',
  imports: [FormsModule],
  templateUrl: './testing.html',
  styleUrl: './testing.css',
})
export class Testing {
  title =signal('Testeo inicial');

  protected readonly startValue = input(0);
  valueChange = output<number>();

  value = signal(0);

  name = '';

  public auth = inject(UserAuthentication);

  ngOnInit():void{
    this.value.set(this.startValue() ?? 0);
  }

  increment(){
    this.value.update(v => v + 1);
    this.valueChange.emit(this.value());
  }
}
