import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TransportationBooking-new',
  templateUrl: './TransportationBooking-new.component.html',
  styleUrls: ['./TransportationBooking-new.component.scss']
})
export class TransportationBookingNewComponent {
  @ViewChild("TransportationBookingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}