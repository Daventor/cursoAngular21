import { Component } from '@angular/core';
import { SignalForm } from '../../forms/signal-form/signal-form';
import { SignalFormValidations } from "../../forms/signal-form-validations/signal-form-validations";


@Component({
  selector: 'app-form',
  imports: [SignalFormValidations],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

}
