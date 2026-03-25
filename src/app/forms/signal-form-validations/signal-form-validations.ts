import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { ThingFormModel } from './thing-form.model';
import { createThingFormModel } from './thing-form.factory';
import { form, required, FormRoot, FormField, email, min, max, minLength, maxLength, pattern, applyEach, validate, SchemaPath, validateHttp, debounce, submit, disabled, readonly, hidden, applyWhen, createMetadataKey, metadata, MetadataReducer } from '@angular/forms/signals';
import { DelayStepper } from "../delay-stepper/delay-stepper";

@Component({
  selector: 'app-signal-form-validations',
  imports: [FormField, DelayStepper],
  templateUrl: './signal-form-validations.html',
  styleUrl: './signal-form-validations.css',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalFormValidations implements OnInit{

  initialData = input<ThingFormModel>();

  thingModel = signal<ThingFormModel>(createThingFormModel(this.initialData()));

  PLACEHOLDER = createMetadataKey<string>();
  HINTS = createMetadataKey<string, string[]>(MetadataReducer.list());


  thingForm = form(this.thingModel, (schema) =>{
    required(schema.email, { message: 'Email es obligatorio'});
    required(schema.name, {
      message: 'Nombre es obligatorio',
      when: ({valueOf}) => valueOf(schema.checkName)
    });
    email(schema.email, { message: 'Introduce un e-mail válido'});

    min(schema.age, 18, { message: 'Mínimo 18 años'})
    max(schema.age, 120, { message: 'Máximo 120 años'})

    min(schema.clientsQty, () => this.thingModel().minClientsQty, { message: 'No hay suficientes clientes'})
  
    required(schema.password, {message: 'Password es obligatorio'});
    minLength(schema.password, 8, { message: 'Mínimo 8 caráteres'});
    maxLength(schema.password, 15, { message: 'Mínimo 15 caráteres'});

    maxLength(schema.remarks, 500, {message: 'Máximo 500 carácteres'});

    pattern(schema.phone, /^\d{3}-\d{3}-\d{3}$/, {message: 'El teléfono tiene que estar en formato 666-666-666'})
    pattern(schema.zip, /^\d{5}$/, { message: 'El código postal debe tener 5 dígitos' })

    minLength(schema.products, 2, { message: 'Mínimo 2 productos !!'});
    applyEach(schema.products, (schemaProducts) =>{
      minLength(schemaProducts.description, 10, {message: 'La descripción tiene que tener al menos 10 carácteres'})
    })

    /**
     schemaPath:
     value - signal - El valor del campo
     state - 
     field - 
     valueOf - 
     stateOf - 
     */

    validate(schema.website, (website) => {
      if(!website.value().startsWith('https://')){
        return [
          {
            kind: 'https',
            message: 'El sitio web debe comenzar por https://'
          }
        ];
      }

      return null;
    })

    required(schema.confirmPassword, { message: 'Por favor, confirma tu contraseña'});
    validate(schema.confirmPassword, ({value, valueOf}) => {
      const confirmPassword = value();
      const password = valueOf(schema.password);

      if(confirmPassword !== password){
        return {
          kind: 'passwordMismatch',
          message: 'Las contraseñas no coinciden'
        }
      }

      return null;
    })

    myCustomUrl(schema.website)

    // required(schema.username, { message: 'El nombre de usuario es obligatorio'});
    // debounce(schema.username, 300);
    // validateHttp(schema.username, {
    //   //request: ({value}) => `https://jsonplaceholder.typicode.com/todos/?test=${value()}`
    //   request: (ctx) => ({
    //     url: 'https://jsonplaceholder.typicode.com/todos/',
    //     params: {
    //       username: ctx.value()
    //     }
    //   })
    //   ,onSuccess: (response: any) =>{
    //     if(response){
    //       return{
    //         kind: 'usernameTaken',
    //         message: 'El usuario está siendo usado'
    //       }
    //     }

    //     return null;
    //   },
    //   onError: (error) =>({
    //     kind: 'networkError',
    //     message: 'No se pudo recuperar los datos del servidor'
    //   })
    // });

    //disabled(schema.zip, () => 'Deshabilitado porque si')
    disabled(schema.zip, (ctx) => ctx.valueOf(schema.checkName)?'Deshabilitado por marcar el check de nombre': false);

    readonly(schema.phone, (ctx) => ctx.valueOf(schema.checkName));

    hidden(schema.anotherUrl, ({valueOf}) => valueOf(schema.checkName))

    applyWhen(schema, ({valueOf}) => valueOf(schema.checkName) === true, (schema) => {
      minLength(schema.name, 8, { message: 'cuando está marcado, tiene que tener 8 letras'})
    })

    metadata(schema.age, this.PLACEHOLDER, () => '99')
    metadata(schema.age, this.HINTS, () => 'Primer mensaje');
    metadata(schema.age, this.HINTS, () => 'Segundo mensaje');
    metadata(schema.age, this.HINTS, () => 'Tercer mensaje');

    disabled(schema.delay, ({valueOf}) => !valueOf(schema.checkDelay))
    min(schema.delay, 30, {message: 'tiene que ser mayor o igual a 30'})
  });



  onSubmit(event: Event){
    event.preventDefault();
    submit(this.thingForm, async () => {
        const thing = this.thingModel();

        // await this.authService.login(thing)
        console.log('Send:', thing);
        
    })
  }

  ngOnInit(): void {
    this.thingModel().email = 'davelop@gmail.com';
    this.thingModel().age = 35;
    this.thingModel().clientsQty = 5;      
    this.thingModel().password = 'abcdefgh';
    this.thingModel().confirmPassword = 'abcdefgh';
    this.thingModel().website = 'https://www.test.com';
    this.thingModel().products = [{name: 'test1', description:'This is a test'}, {name: 'test2', description:'This is another test'}]
  }

  addProduct(){
    this.thingModel.update(model => ({
      ...model,
      products: [...model.products, { name: '', description: ''}]
    }))
  }

  removeProduct(index:number){
    this.thingModel.update(model => ({
      ...model,
      products: model.products.filter((_, i) => i !== index)
    }))
  }
}


function myCustomUrl(path: SchemaPath<string>, options?: {message?: string}){
  validate(path, ({value}) => {
    try{
      new URL(value())
      return null;
    }catch{
      return {
        kind: 'url',
        message: options?.message || 'Escribe una url correcta'
      }
    }
  })
}