import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Accommodation', loadChildren: () => import('./Accommodation/Accommodation.module').then(m => m.AccommodationModule) },
    
        { path: 'AccommodationBooking', loadChildren: () => import('./AccommodationBooking/AccommodationBooking.module').then(m => m.AccommodationBookingModule) },
    
        { path: 'Activity', loadChildren: () => import('./Activity/Activity.module').then(m => m.ActivityModule) },
    
        { path: 'Booking', loadChildren: () => import('./Booking/Booking.module').then(m => m.BookingModule) },
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'Guide', loadChildren: () => import('./Guide/Guide.module').then(m => m.GuideModule) },
    
        { path: 'GuideAssignment', loadChildren: () => import('./GuideAssignment/GuideAssignment.module').then(m => m.GuideAssignmentModule) },
    
        { path: 'Review', loadChildren: () => import('./Review/Review.module').then(m => m.ReviewModule) },
    
        { path: 'Tour', loadChildren: () => import('./Tour/Tour.module').then(m => m.TourModule) },
    
        { path: 'TourActivity', loadChildren: () => import('./TourActivity/TourActivity.module').then(m => m.TourActivityModule) },
    
        { path: 'Transportation', loadChildren: () => import('./Transportation/Transportation.module').then(m => m.TransportationModule) },
    
        { path: 'TransportationBooking', loadChildren: () => import('./TransportationBooking/TransportationBooking.module').then(m => m.TransportationBookingModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }