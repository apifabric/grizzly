import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TOURACTIVITY_MODULE_DECLARATIONS, TourActivityRoutingModule} from  './TourActivity-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TourActivityRoutingModule
  ],
  declarations: TOURACTIVITY_MODULE_DECLARATIONS,
  exports: TOURACTIVITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TourActivityModule { }