import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing } from './testing';
import { inputBinding, outputBinding } from '@angular/core';
import { UserAuthentication } from '../../user-authentication';
import { QuoteService } from '../../services/quote-service';
import { of } from 'rxjs';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter, Router, withComponentInputBinding } from '@angular/router';
import { routes } from '../../app.routes'
import { Detail } from '../routing/detail/detail';
import { Routing } from '../routing/routing';

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

const authMock = {
  isLoggedIn: vi.fn().mockReturnValue(false),
  logout: vi.fn()
}

describe('Testing mock service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Testing],
      providers: [
        { provide: UserAuthentication, useValue: authMock}
      ]
    })
  })

  it('should show login when user is no logged in', () => {
    authMock.isLoggedIn.mockReturnValue(false);

    const fixture = TestBed.createComponent(Testing);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Login');
  })

  it('shoul show logout when user IS logged in', () => {
    authMock.isLoggedIn.mockReturnValue(true);

    const fixture = TestBed.createComponent(Testing);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button.login');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Logout');
  })

  it('should call logout when clicking the button', () =>{
    authMock.isLoggedIn.mockReturnValue(true);

    const fixture = TestBed.createComponent(Testing);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button.login');

    button.click();

    expect(authMock.logout).toHaveBeenCalledOnce();
  })

  describe('Testing async service with stub', () => {
    let component: Testing;
    let fixture: ComponentFixture<Testing>;

    class QuoteServiceStub extends QuoteService {
      private testQuote = 'Test Quote';

      override getQuote(){
        return of(this.testQuote);
      }
    }

    beforeEach(async () => {
      TestBed.configureTestingModule({
        providers: [{ provide: QuoteService, useClass: QuoteServiceStub}]
      })

      fixture = TestBed.createComponent(Testing);
      component = fixture.componentInstance;
    })

    it('should display text on next quopte button click', async () => {
      let nextQuoteBtn: HTMLButtonElement = fixture.nativeElement.querySelector('.nextQuoteBtn');

      nextQuoteBtn.click();

      await fixture.whenStable();

      let quoteMessage: HTMLElement = fixture.nativeElement.querySelector('.quote');

      expect(quoteMessage.textContent).toContain('Test Quote');
    })

  })

  describe('Routing tests', async () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideRouter(routes, withComponentInputBinding()),
        ]
      })
    })

    it('should navigate to testing route', async () => {
      const harness = await RouterTestingHarness.create();

      const component = await harness.navigateByUrl('testing');

      expect(component).toBeInstanceOf(Testing);
    })

    it('SHould navigate to url with params', async () => {
      const harness = await RouterTestingHarness.create();

      const component = await harness.navigateByUrl('/routing/detail/56');

      expect(component).toBeInstanceOf(Routing);
      expect(harness.routeNativeElement?.textContent).toContain('56');
    })
    
    it('redirects to login', async () => {
      const harness = await RouterTestingHarness.create();

      const component = await harness.navigateByUrl('/routing/admin');

      const router = TestBed.inject(Router);

      //expect(router.url).toContain('/admin');
      expect(router.url).toContain('/review')
    })
  })
});
