import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AccommodationBooking-card.component.html',
  styleUrls: ['./AccommodationBooking-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AccommodationBooking-card]': 'true'
  }
})

export class AccommodationBookingCardComponent {


}