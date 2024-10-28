import { MenuRootItem } from 'ontimize-web-ngx';

import { AccommodationCardComponent } from './Accommodation-card/Accommodation-card.component';

import { AccommodationBookingCardComponent } from './AccommodationBooking-card/AccommodationBooking-card.component';

import { ActivityCardComponent } from './Activity-card/Activity-card.component';

import { BookingCardComponent } from './Booking-card/Booking-card.component';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { GuideCardComponent } from './Guide-card/Guide-card.component';

import { GuideAssignmentCardComponent } from './GuideAssignment-card/GuideAssignment-card.component';

import { ReviewCardComponent } from './Review-card/Review-card.component';

import { TourCardComponent } from './Tour-card/Tour-card.component';

import { TourActivityCardComponent } from './TourActivity-card/TourActivity-card.component';

import { TransportationCardComponent } from './Transportation-card/Transportation-card.component';

import { TransportationBookingCardComponent } from './TransportationBooking-card/TransportationBooking-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Accommodation', name: 'ACCOMMODATION', icon: 'view_list', route: '/main/Accommodation' }
    
        ,{ id: 'AccommodationBooking', name: 'ACCOMMODATIONBOOKING', icon: 'view_list', route: '/main/AccommodationBooking' }
    
        ,{ id: 'Activity', name: 'ACTIVITY', icon: 'view_list', route: '/main/Activity' }
    
        ,{ id: 'Booking', name: 'BOOKING', icon: 'view_list', route: '/main/Booking' }
    
        ,{ id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'Guide', name: 'GUIDE', icon: 'view_list', route: '/main/Guide' }
    
        ,{ id: 'GuideAssignment', name: 'GUIDEASSIGNMENT', icon: 'view_list', route: '/main/GuideAssignment' }
    
        ,{ id: 'Review', name: 'REVIEW', icon: 'view_list', route: '/main/Review' }
    
        ,{ id: 'Tour', name: 'TOUR', icon: 'view_list', route: '/main/Tour' }
    
        ,{ id: 'TourActivity', name: 'TOURACTIVITY', icon: 'view_list', route: '/main/TourActivity' }
    
        ,{ id: 'Transportation', name: 'TRANSPORTATION', icon: 'view_list', route: '/main/Transportation' }
    
        ,{ id: 'TransportationBooking', name: 'TRANSPORTATIONBOOKING', icon: 'view_list', route: '/main/TransportationBooking' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AccommodationCardComponent

    ,AccommodationBookingCardComponent

    ,ActivityCardComponent

    ,BookingCardComponent

    ,CustomerCardComponent

    ,GuideCardComponent

    ,GuideAssignmentCardComponent

    ,ReviewCardComponent

    ,TourCardComponent

    ,TourActivityCardComponent

    ,TransportationCardComponent

    ,TransportationBookingCardComponent

];