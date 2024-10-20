import { Component, OnInit } from '@angular/core';
import { TestprofileComponent } from '../testprofile/testprofile.component';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { AlertService } from '../../services/alert.service'
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  feature: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // { position: 1, name: 'TC001', weight: 1.0079, symbol: 'Hy' },
  // { position: 2, name: 'TC002', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'TC001', weight: 1.0079, symbol: 'Hy' },
  // { position: 4, name: 'TC002', weight: 4.0026, symbol: 'He' },

  { position: 1, name: 'TC001', feature: 'US001', weight: 1.0079, symbol: 'Hy' },
  { position: 2, name: 'TC002', feature: 'US001', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'TC003', feature: 'US001', weight: 1.0079, symbol: 'Hy' },
  { position: 4, name: 'TC004', feature: 'US001', weight: 4.0026, symbol: 'He' },
  { position: 5, name: 'TC005', feature: 'US001', weight: 1.0079, symbol: 'Hy' },
  { position: 6, name: 'TC006', feature: 'US001', weight: 4.0026, symbol: 'He' },
  { position: 7, name: 'TC001', feature: 'US002', weight: 1.0079, symbol: 'Hy' },
  { position: 8, name: 'TC002', feature: 'US002', weight: 4.0026, symbol: 'He' },
  { position: 9, name: 'TC003', feature: 'US002', weight: 1.0079, symbol: 'Hy' },
  { position: 10, name: 'TC004', feature: 'US002', weight: 4.0026, symbol: 'He' },
  { position: 11, name: 'TC005', feature: 'US002', weight: 1.0079, symbol: 'Hy' },
  { position: 12, name: 'TC006', feature: 'US002', weight: 4.0026, symbol: 'He' },
  // other elements
];

@Component({
  selector: 'app-executetests',
  templateUrl: './executetests.component.html',
  styleUrl: './executetests.component.css'
})


export class ExecutetestsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'feature', 'weight', 'symbol', 'execute', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selectedValue: string = '';
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private alertService: AlertService, public dialog: MatDialog) {
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      return data.feature.toLowerCase().includes(filter) || data.feature.toLowerCase().includes(filter);
    };
  }

  options = [
    { value: 'all', viewValue: 'All' },
    { value: 'us001', viewValue: 'US001' },
    { value: 'us002', viewValue: 'US002' }
    // { value: 'all', viewValue: 'All' },
    // { value: 'Hy', viewValue: 'Hydrogen' },
    // { value: 'He', viewValue: 'Helium' }
    // add more options
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterTable() {
    console.log(this.selectedValue.trim());
    if (this.selectedValue === 'all') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filter = this.selectedValue.trim().toLowerCase();
      // this.dataSource.filter = this.selectedValue.trim();
    }
  }

  deleteRow1(element: PeriodicElement) {
    const index = this.dataSource.data.indexOf(element);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource.data);
    }
  }

  deleteRow(element: PeriodicElement) {
    const confirmed = this.alertService.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      const index = this.dataSource.data.indexOf(element);
      if (index >= 0) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource.data);
      }
    }
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  executeRow(element: PeriodicElement) {
    console.log('Executing row:', element);
    // Add your execution logic here
  }

  addRow() {
    const dialogRef = this.dialog.open(TestprofileComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Item added:', result);
        // Logic to add the new item to your data source
      }
    });
  }

  openDialog(): void {
    this.dialog.open(TestprofileComponent);
  }


  ngOnInit() { }
}