import { assertNotInReactiveContext, Component, computed, effect, inject, Injector, isSignal, isWritableSignal, linkedSignal, signal, untracked, WritableSignal } from '@angular/core';
import { CounterState } from './counter-state';

@Component({
  selector: 'app-class-signals',
  imports: [],
  templateUrl: './class-signals.html',
  styleUrl: './class-signals.css',
})
export class ClassSignals {
  protected myCount = signal(0);
  protected text = signal<string | null>(null);
  protected text2: WritableSignal<boolean> = signal(true);  // Esto es lo que pasa realmente

  modifySignal(){
    this.myCount.set(20);
    this.myCount.update(v => v + 1);
  }

  state = inject(CounterState);

  count = this.state.count;

  increment(){
    this.state.increment();
  }

  price = signal(10);
  qty = signal(2);

  total = computed(() => this.price() * this.qty() );

  showCount = signal(false);
  anotherCount = signal(0);

  conditionalCount = computed<string>(() => {
    if(this.showCount()){
      return `El otro contador es ${this.anotherCount()}`;
    }else{
      return 'Nada que ver aún';
    }
  });

  subscribeToEvent(){
    assertNotInReactiveContext(this.subscribeToEvent);
    // Continuamos con nuestro código
  }

  constructor(){
    effect(() => {
      console.log(`El precio es: ${this.price() }`);
      
    });
  }

  changePrice(){
    this.price.set(324);
  }

  initializeLogging(){
    effect(() => {
      console.log(`Precio desde fuera del constructor: ${this.price()}`);
    }, {injector: this.injector})
  }
  
  private injector = inject(Injector);

  untrackedExample():void{
    effect(() =>{
      console.log(`Esto se muestra cuando se cambia el precio: ${untracked(this.price)} y no el contador: ${this.count()}`);
      
    }, {injector: this.injector});

    effect(() => {
      const price = this.price();
      untracked(() =>{
        // todo lo que hay aquí no será trackeado
      })
    },{injector: this.injector})
  }


  data = signal(['test'], {equal: this.isEqualData});

  isEqualData(a:any[], b:any[]):boolean{
    if(a.length !== b.length) return false;
    return a.every((value, index) => value === b[index]);
  }

  updateDataSignal(){
    this.data.set(['test']);
  }

  checkSignals(): void{
    console.log('¿Price es una señal?: ' + isSignal(this.price));
    console.log('¿Price es escribible?: ' + isWritableSignal(this.price));
    console.log('Total es escribible?: ' + isWritableSignal(this.total));
    
    
  }

  source = signal(10);
  local = linkedSignal(() => this.source());

  changeLocal(){
    this.local.set(20);
  }

  changeSource(){
    this.source.set(30);
  }
}
