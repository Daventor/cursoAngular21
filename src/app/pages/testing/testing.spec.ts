import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing } from './testing';
import { inputBinding, outputBinding } from '@angular/core';

describe('Testing', () => {
  let component: Testing;
  let fixture: ComponentFixture<Testing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain testing Works!', () => {
    const compElement : HTMLElement = fixture.nativeElement;
    
    expect(compElement.textContent).toContain('testing works!');

    const h1 = compElement.querySelector('h1')!;
    expect(h1.textContent).toEqual('Testeo inicial');
  })

  it('should display text from an input', async() =>{
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input');
    const nameDisplay: HTMLElement = hostElement.querySelector('div');

    nameInput.value = "una prueba";

    nameInput.dispatchEvent(new Event('input'));

    await fixture.whenStable();

    expect(nameDisplay.textContent).toBe("una prueba");
  })
});

describe('Testing unit', () => {
  it('should increment "value" and emit "valueChange', () =>{
    let value = 5;
    const onValueChange = vi.fn((newValue:number) => {
      value = newValue
    });

    const fixture = TestBed.createComponent(Testing, {
      bindings:[
        inputBinding('startValue', () => value),
        outputBinding('valueChange', onValueChange)
      ]
    });

    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button.textContent?.trim()).toBe('5');

    button.click(); 
    //button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(onValueChange).toHaveBeenCalledOnce();
    expect(onValueChange).toHaveBeenCalledWith(6);

    expect(button.textContent?.trim()).toBe('6');
  })
});
