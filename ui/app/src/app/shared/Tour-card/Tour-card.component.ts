import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Tour-card.component.html',
  styleUrls: ['./Tour-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Tour-card]': 'true'
  }
})

export class TourCardComponent {


}