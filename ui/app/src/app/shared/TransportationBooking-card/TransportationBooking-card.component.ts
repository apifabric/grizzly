import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TransportationBooking-card.component.html',
  styleUrls: ['./TransportationBooking-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TransportationBooking-card]': 'true'
  }
})

export class TransportationBookingCardComponent {


}