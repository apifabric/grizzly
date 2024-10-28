import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TourActivity-card.component.html',
  styleUrls: ['./TourActivity-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TourActivity-card]': 'true'
  }
})

export class TourActivityCardComponent {


}