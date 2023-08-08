import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
 })
export class ServiceC {
  run () {
    console.log('service c')
  }
}