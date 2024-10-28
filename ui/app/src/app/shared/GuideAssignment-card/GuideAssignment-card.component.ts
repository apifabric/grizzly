import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './GuideAssignment-card.component.html',
  styleUrls: ['./GuideAssignment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.GuideAssignment-card]': 'true'
  }
})

export class GuideAssignmentCardComponent {


}