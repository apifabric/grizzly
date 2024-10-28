import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'GuideAssignment-new',
  templateUrl: './GuideAssignment-new.component.html',
  styleUrls: ['./GuideAssignment-new.component.scss']
})
export class GuideAssignmentNewComponent {
  @ViewChild("GuideAssignmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}