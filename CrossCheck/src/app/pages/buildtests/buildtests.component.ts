import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // other elements
];
@Component({
  selector: 'app-buildtests',
  templateUrl: './buildtests.component.html',
  styleUrl: './buildtests.component.css'
})

export class BuildtestsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'execute', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selectedValue: string = '';
  selection = new SelectionModel<PeriodicElement>(true, []);

  options = [
    { value: 'all', viewValue: 'All' },
    { value: 'Hy', viewValue: 'Hydrogen' },
    { value: 'He', viewValue: 'Helium' }
    // add more options
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterTable() {
    if (this.selectedValue === 'all') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filter = this.selectedValue.trim().toLowerCase();
    }
  }

  deleteRow(element: PeriodicElement) {
    const index = this.dataSource.data.indexOf(element);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource.data);
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

  ngOnInit() { }
}