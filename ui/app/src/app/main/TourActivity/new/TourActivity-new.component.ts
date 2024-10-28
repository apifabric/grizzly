import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TourActivity-new',
  templateUrl: './TourActivity-new.component.html',
  styleUrls: ['./TourActivity-new.component.scss']
})
export class TourActivityNewComponent {
  @ViewChild("TourActivityForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}