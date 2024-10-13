import { Component } from '@angular/core';

@Component({
  selector: 'app-executetests',
  templateUrl: './executetests.component.html',
  styleUrl: './executetests.component.css'
})
export class ExecutetestsComponent {
  options = [
    { value: 'option1', viewValue: 'Option 1' },
    { value: 'option2', viewValue: 'Option 2' },
    { value: 'option3', viewValue: 'Option 3' }
  ];
}
