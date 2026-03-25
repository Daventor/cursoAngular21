import { Injectable } from '@angular/core';
import { LoggerService } from './logger-service';

@Injectable({
  providedIn: 'root',
})
export class AdvancedLogger extends LoggerService{
  override trackEvent(category: string, value: string): void {
    console.log('Advanced Log Event', {category, value, timestamp: new Date().toISOString(), });
    
  }
  
}
