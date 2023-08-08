import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
 })
export class ServiceD {
  constructor() {}

  run () {
    console.log('service d');
  }
}