import { Injectable } from '@angular/core';
import { ServiceB } from './service-b.service';
import { ServiceC } from './service-c.service';
import { ServiceD } from '@org/ui-shared/data-access';

@Injectable({
  providedIn: 'root',
 })
export class ServiceA {
  constructor(private readonly serviceB: ServiceB, private readonly serviceC: ServiceC, private readonly serviceD: ServiceD) {}

  run () {
    console.log('service a');
    this.serviceB.run();
    this.serviceC.run();
    this.serviceD.run();
  }
}