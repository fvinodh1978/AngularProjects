import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-testprofile',
  templateUrl: './testprofile.component.html',
  styleUrl: './testprofile.component.css'
})
export class TestprofileComponent {
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10'];
  filteredOptions = this.options.slice();
  selectedOption = '';
  newOption = '';
  itemName: string = '';

  constructor(public dialogRef: MatDialogRef<TestprofileComponent>) {
  }

  filterOptions() {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(this.selectedOption.toLowerCase()));
  }

  addOption() {
    if (this.selectedOption && !this.options.includes(this.selectedOption)) {
      this.options.push(this.selectedOption);
      this.filteredOptions = this.options.slice();
    }
  }

  onOptionSelected(event: any) {
    this.selectedOption = event.option.value;
  }

  onSubmit(): void {
    console.log(this.selectedOption)
    this.dialogRef.close(this.itemName);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}