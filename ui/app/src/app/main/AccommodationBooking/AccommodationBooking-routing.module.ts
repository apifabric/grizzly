import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationBookingHomeComponent } from './home/AccommodationBooking-home.component';
import { AccommodationBookingNewComponent } from './new/AccommodationBooking-new.component';
import { AccommodationBookingDetailComponent } from './detail/AccommodationBooking-detail.component';

const routes: Routes = [
  {path: '', component: AccommodationBookingHomeComponent},
  { path: 'new', component: AccommodationBookingNewComponent },
  { path: ':id', component: AccommodationBookingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AccommodationBooking-detail-permissions'
      }
    }
  }
];

export const ACCOMMODATIONBOOKING_MODULE_DECLARATIONS = [
    AccommodationBookingHomeComponent,
    AccommodationBookingNewComponent,
    AccommodationBookingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccommodationBookingRoutingModule { }