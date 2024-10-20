import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface DialogData {
  dataSource: any[];
}

@Component({
  selector: 'app-testdetails',
  templateUrl: './testdetails.component.html',
  styleUrl: './testdetails.component.css'
})
export class TestdetailsComponent {
    displayedColumns: string[] = ['key', 'value'];
    dataSource: MatTableDataSource<any>;
  
    constructor(
      public dialogRef: MatDialogRef<TestdetailsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
      this.dataSource = new MatTableDataSource(data.dataSource); // Initialize the data source properly
    }
  
    onClose(): void {
      this.dialogRef.close();
    }
  
}