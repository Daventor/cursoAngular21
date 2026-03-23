import { Component, output } from '@angular/core';

@Component({
  selector: 'app-class-outputs',
  imports: [],
  templateUrl: './class-outputs.html',
  styleUrl: './class-outputs.css',
})
export class ClassOutputs {
  buttonClicked = output<void>();
  primitiveSend = output<number>();
  objectSend = output<object>();
  uglyName = output<void>({alias: 'prettyName'});

}
