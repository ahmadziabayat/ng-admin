import { Component } from '@angular/core';
import {ResizeEvent } from 'angular-Resizable-element';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  onResizeEnd(event: ResizeEvent): void {
  console.log('Element was resized', event);
}

  starRate = 2;
  heartRate = 4;
}
