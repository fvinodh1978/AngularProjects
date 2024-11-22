import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    private router: Router
  ){}

  logout(): void {
    // Perform logout logic, like clearing authentication tokens // ... 
    // Navigate to the login page 
    this.router.navigate(['/login']).then(() => {
      // Close the dialog 
      this.dialogRef.close();
    });
  }
}
