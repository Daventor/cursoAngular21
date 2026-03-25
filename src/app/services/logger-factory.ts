import { Injectable } from '@angular/core';
import { LoggerService } from './logger-service';


export function LoggerFactory() {
  console.log("Factoria");
  //const userStore = inject(UserStore)

  return new LoggerService() 
}
