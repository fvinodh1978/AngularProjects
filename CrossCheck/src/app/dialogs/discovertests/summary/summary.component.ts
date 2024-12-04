import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface DialogData {
  dataSource: any[];
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  displayedColumns: string[] = ['module', 'suite', 'count'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    public dialogRef: MatDialogRef<SummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  
    this.dataSource = new MatTableDataSource(data.dataSource); // Initialize the data source properly
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
