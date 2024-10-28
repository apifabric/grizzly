import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityHomeComponent } from './home/Activity-home.component';
import { ActivityNewComponent } from './new/Activity-new.component';
import { ActivityDetailComponent } from './detail/Activity-detail.component';

const routes: Routes = [
  {path: '', component: ActivityHomeComponent},
  { path: 'new', component: ActivityNewComponent },
  { path: ':id', component: ActivityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Activity-detail-permissions'
      }
    }
  },{
    path: ':activity_id/TourActivity', loadChildren: () => import('../TourActivity/TourActivity.module').then(m => m.TourActivityModule),
    data: {
        oPermission: {
            permissionId: 'TourActivity-detail-permissions'
        }
    }
}
];

export const ACTIVITY_MODULE_DECLARATIONS = [
    ActivityHomeComponent,
    ActivityNewComponent,
    ActivityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }