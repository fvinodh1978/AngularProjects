import { Component, input, signal } from '@angular/core';
import { Widget } from '../../model/dashboard';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
})
export class WidgetComponent {
  data = input.required<Widget>();

  showOptions=signal(false)
}
