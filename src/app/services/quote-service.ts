import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

export interface QuoteResponse {
  id: number,
  quote: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://dummyjson.com/quotes/random';

  getQuote(): Observable<string> {
    return this.http.get<QuoteResponse>(this.apiUrl).pipe(
      map(response => response.quote), 
      catchError(() => throwError(() => new Error('Quote error')))
    );
  }
}
