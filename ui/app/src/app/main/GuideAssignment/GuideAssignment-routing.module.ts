import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideAssignmentHomeComponent } from './home/GuideAssignment-home.component';
import { GuideAssignmentNewComponent } from './new/GuideAssignment-new.component';
import { GuideAssignmentDetailComponent } from './detail/GuideAssignment-detail.component';

const routes: Routes = [
  {path: '', component: GuideAssignmentHomeComponent},
  { path: 'new', component: GuideAssignmentNewComponent },
  { path: ':id', component: GuideAssignmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'GuideAssignment-detail-permissions'
      }
    }
  }
];

export const GUIDEASSIGNMENT_MODULE_DECLARATIONS = [
    GuideAssignmentHomeComponent,
    GuideAssignmentNewComponent,
    GuideAssignmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideAssignmentRoutingModule { }