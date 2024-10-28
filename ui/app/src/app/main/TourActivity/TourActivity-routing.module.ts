import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourActivityHomeComponent } from './home/TourActivity-home.component';
import { TourActivityNewComponent } from './new/TourActivity-new.component';
import { TourActivityDetailComponent } from './detail/TourActivity-detail.component';

const routes: Routes = [
  {path: '', component: TourActivityHomeComponent},
  { path: 'new', component: TourActivityNewComponent },
  { path: ':id', component: TourActivityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TourActivity-detail-permissions'
      }
    }
  }
];

export const TOURACTIVITY_MODULE_DECLARATIONS = [
    TourActivityHomeComponent,
    TourActivityNewComponent,
    TourActivityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourActivityRoutingModule { }