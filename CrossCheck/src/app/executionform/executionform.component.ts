import { Component } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormAttributes } from './formattributes';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-executionform',
  templateUrl: './executionform.component.html',
  styleUrl: './executionform.component.css'
})
export class ExecutionformComponent {
  @Input() label: string = "Click Me";
  formattributes = new FormAttributes();
  constructor(private RestApiService: RestApiService) { }
  // showText() {
  //   this.displayText = this.userInput;
  // }
  rapidPage: string="";
  input1: string = '';
  input2: string = '';
  selectedOption: string = ''; // Initialize with a default value

  submitForm() {
    console.log('Input 1:', this.input1);
    console.log('Input 2:', this.input2);
    console.log('Selected Option:', this.selectedOption);
    // Add your form submission logic here
  }

  handleButtonClick(event: MouseEvent): void {

    // this.RestApiService.getAllData().subscribe((response) => {
      this.RestApiService.runPostRequest().subscribe((response) => {      
      console.log('API response:', response);
      // this.rapidPage= response[0]['testCaseName'];
      this.rapidPage = JSON.stringify(response);
    });

    console.log('Button clicked!', event);
    console.log('Input 1:', this.input1);
    console.log('Input 2:', this.input2);
    console.log('Selected Option:', this.selectedOption);
    const response = '{"data": "UpdatedPage"}';

    console.log('Received Data:', this.rapidPage);
    // Add your custom logic here
  }
}