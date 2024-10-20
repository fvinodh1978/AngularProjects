import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-managetests',
  templateUrl: './managetests.component.html',
  styleUrl: './managetests.component.css'
})
export class ManagetestsComponent {

  options = ['Option01', 'Option02', 'Option03', 'Option04', 'Option05', 'Option06', 'Option01', 'Option02', 'Option03', 'Option04', 'Option05', 'Option06'];
  filteredOptions = this.options.slice();
  selectedOption = '';
  newOption = '';
  itemName: string = '';
  selectedOptions = new FormControl();
  selectedOptionsList: string[] = [];

  // constructor(public dialogRef: MatDialogRef<ManagetestsComponent>) {
  // }

  filterOptions() {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(this.selectedOption.toLowerCase()));
  }

  addOption() {
    if (this.selectedOption && !this.options.includes(this.selectedOption)) {
      this.options.push(this.selectedOption);
      this.filteredOptions = this.options.slice();
    }
  }

  isOptionSelected(option: string): boolean {
    return this.selectedOptions.value.includes(option);
  }

  onOptionSelected(event: any) {
    this.selectedOption = event.option.value;
  }

  onSelectionChange(selected: string[]) {
    console.log('Selected values:', selected);
    // Handle the selected values as needed
  }

  onSubmit(): void {
    console.log(this.selectedOption)
    // this.dialogRef.close(this.itemName);
  }

  onCancel(): void {
    // this.dialogRef.close();
  }
}
