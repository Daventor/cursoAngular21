import { Component, computed, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface LoginData{
  email: string;
  password: string;
}

interface UserData{
  name: string;
  email: string;
  phoneNumber: string | null;
}

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {

  // loginModel = signal({
  //     email: '',
  //     password: ''
  // })

  loginModel = signal<LoginData>({
    email: '',
    password: ''
  })

  loginForm = form(this.loginModel);

  async onSubmit(){
    const formData = this.loginModel();
    console.log(formData.email, formData.password);
  }

  userModel = signal<UserData>({
    name: '',
    email:'',
    phoneNumber: null
  })

  userForm = form(this.userModel);

  passwordLength = computed(() => {
    return this.loginForm.password().value().length;
  })

  clearEmail(){
    this.loginForm.email().value.set('');
  }

  addPrefix(){
    this.userForm.name().value.update(currentName => '[ATREBO] ' + currentName);
  }

  enterpriseModel = signal({
    name: '',
    email: '',
    address: {
      street: '', // enterpriseForm.address.street().value()
      city:'',
      zip: ''
    },
    phones: [
      {
        name: '', // enterpriseForm.phones[0].name().value()
        phone: ''
      }
    ]
  });
}
