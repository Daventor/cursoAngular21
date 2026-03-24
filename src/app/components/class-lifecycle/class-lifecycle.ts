import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DestroyRef, DoCheck, inject, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-class-lifecycle',
  imports: [],
  templateUrl: './class-lifecycle.html',
  styleUrl: './class-lifecycle.css',
})
export class ClassLifecycle implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
OnDestroy {
  userId = input<number>();

  private destroyRef = inject(DestroyRef);

  constructor(){
    console.log("From constructor");
    
    this.destroyRef.onDestroy(() => {
      console.log(('Destroy from destroyRef !!'));

      setTimeout(() => {
        if(this.destroyRef.destroyed){
          console.log("Destroyed !!")
        }
      }, 1000);
      
    });
  }

  ngOnInit(){
    console.log("ngOnInit");
    
  }

  ngOnChanges(changes: SimpleChanges<ClassLifecycle>): void {
    console.log("ngOnChanges");

    if(changes.userId){
      console.log(`Previous: ${changes.userId.previousValue}`);
      console.log(`Current: ${changes.userId.currentValue}`);
      console.log(`Is first: ${changes.userId.isFirstChange()}`);
    }
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContent");
    
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    
  }

  ngAfterViewInit(): void {
    console.log("afterviewInit");
    
  }

  ngAfterViewChecked(): void {
    console.log("afterViewChecked");
    
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    
  }
}
