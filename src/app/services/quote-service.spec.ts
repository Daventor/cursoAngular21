import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote-service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be GET on method', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);

    const quote$ = service.getQuote();

    const quotePromise = firstValueFrom(quote$);

    const req = httpTesting.expectOne('https://dummyjson.com/quotes/random', 'Request a random Quote');
    expect(req.request.method).toBe('GET');
    expect(req.request.body).toBeNull();

    const myQuote = {
      id: 123,
      quote: 'Testing quotes',
      author: 'Anonymous'
    }

    req.flush(myQuote);
    const result = await quotePromise;
    expect(result).toEqual(myQuote.quote);

    httpTesting.verify();
  })

  it('should get error on server error or internet errors', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);

    const quote$ = service.getQuote();
    const quotePromise = firstValueFrom(quote$);

    const req = httpTesting.expectOne('https://dummyjson.com/quotes/random');
    req.flush('Failed!', {status: 500, statusText: 'Internal Server Error'});

    expect(quotePromise).rejects.toBeTruthy();

    try{
      await quotePromise;
    }catch (error){
      const httpError = error as HttpErrorResponse;

      //expect(httpError.status).toBe(500);
    }

    await expect(quotePromise).rejects.toThrow('Quote error');
  })
});
