import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
 })
export class ServiceB {
  run () {
    console.log('service b')
  }
}