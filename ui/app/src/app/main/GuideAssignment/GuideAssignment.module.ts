import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GUIDEASSIGNMENT_MODULE_DECLARATIONS, GuideAssignmentRoutingModule} from  './GuideAssignment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GuideAssignmentRoutingModule
  ],
  declarations: GUIDEASSIGNMENT_MODULE_DECLARATIONS,
  exports: GUIDEASSIGNMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GuideAssignmentModule { }