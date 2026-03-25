import { Component, Inject, inject, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger-service';
import { AdvancedLogger } from '../../services/advanced-logger';
import { APP_HOOKS, APP_SETTINGS, AppHook, AppSettings } from '../../config/app-settings';
import { LoggerFactory } from '../../services/logger-factory';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
  providers: [
    {
      provide: LoggerService,
      useClass: AdvancedLogger
    },
    // {provide: OldLogger, useExisting: LoggerService}
    {provide: APP_HOOKS, useValue: () => console.log('hook 1'), multi: true },
    {provide: APP_HOOKS, useValue: () => console.log('hook 2'), multi: true },

    {provide: LoggerService, useFactory: LoggerFactory}
  ]
})
export class Services  implements OnInit{
  loggerService = inject(LoggerService);

  protected settings: AppSettings = inject(APP_SETTINGS);

  ngOnInit(): void {
    this.loggerService.trackEvent('Inicio', ' Iniciada página')
  }

  constructor(@Inject(APP_HOOKS) hooks: AppHook[]){
    hooks.forEach(h => h());
  }
}
