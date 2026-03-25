import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  trackEvent(category:string, value: string){
    console.log('Log Event: ', {category, value, timestamp: new Date().toISOString(), });
    
  
  }
}
