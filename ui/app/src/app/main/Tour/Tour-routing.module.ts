import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourHomeComponent } from './home/Tour-home.component';
import { TourNewComponent } from './new/Tour-new.component';
import { TourDetailComponent } from './detail/Tour-detail.component';

const routes: Routes = [
  {path: '', component: TourHomeComponent},
  { path: 'new', component: TourNewComponent },
  { path: ':id', component: TourDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Tour-detail-permissions'
      }
    }
  },{
    path: ':tour_id/Booking', loadChildren: () => import('../Booking/Booking.module').then(m => m.BookingModule),
    data: {
        oPermission: {
            permissionId: 'Booking-detail-permissions'
        }
    }
},{
    path: ':tour_id/GuideAssignment', loadChildren: () => import('../GuideAssignment/GuideAssignment.module').then(m => m.GuideAssignmentModule),
    data: {
        oPermission: {
            permissionId: 'GuideAssignment-detail-permissions'
        }
    }
},{
    path: ':tour_id/Review', loadChildren: () => import('../Review/Review.module').then(m => m.ReviewModule),
    data: {
        oPermission: {
            permissionId: 'Review-detail-permissions'
        }
    }
},{
    path: ':tour_id/TourActivity', loadChildren: () => import('../TourActivity/TourActivity.module').then(m => m.TourActivityModule),
    data: {
        oPermission: {
            permissionId: 'TourActivity-detail-permissions'
        }
    }
}
];

export const TOUR_MODULE_DECLARATIONS = [
    TourHomeComponent,
    TourNewComponent,
    TourDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }