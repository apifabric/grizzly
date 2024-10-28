import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ACCOMMODATIONBOOKING_MODULE_DECLARATIONS, AccommodationBookingRoutingModule} from  './AccommodationBooking-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AccommodationBookingRoutingModule
  ],
  declarations: ACCOMMODATIONBOOKING_MODULE_DECLARATIONS,
  exports: ACCOMMODATIONBOOKING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccommodationBookingModule { }