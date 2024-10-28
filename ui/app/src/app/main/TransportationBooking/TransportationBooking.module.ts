import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRANSPORTATIONBOOKING_MODULE_DECLARATIONS, TransportationBookingRoutingModule} from  './TransportationBooking-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TransportationBookingRoutingModule
  ],
  declarations: TRANSPORTATIONBOOKING_MODULE_DECLARATIONS,
  exports: TRANSPORTATIONBOOKING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransportationBookingModule { }