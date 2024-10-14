import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-testprofile',
  templateUrl: './testprofile.component.html',
  styleUrl: './testprofile.component.css'
})
export class TestprofileComponent {
  itemName: string='';

  constructor(public dialogRef: MatDialogRef<TestprofileComponent>) { }

  onSubmit(): void {
    this.dialogRef.close(this.itemName);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
