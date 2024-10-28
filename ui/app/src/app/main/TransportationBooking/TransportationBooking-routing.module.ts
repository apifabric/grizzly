import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportationBookingHomeComponent } from './home/TransportationBooking-home.component';
import { TransportationBookingNewComponent } from './new/TransportationBooking-new.component';
import { TransportationBookingDetailComponent } from './detail/TransportationBooking-detail.component';

const routes: Routes = [
  {path: '', component: TransportationBookingHomeComponent},
  { path: 'new', component: TransportationBookingNewComponent },
  { path: ':id', component: TransportationBookingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TransportationBooking-detail-permissions'
      }
    }
  }
];

export const TRANSPORTATIONBOOKING_MODULE_DECLARATIONS = [
    TransportationBookingHomeComponent,
    TransportationBookingNewComponent,
    TransportationBookingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportationBookingRoutingModule { }