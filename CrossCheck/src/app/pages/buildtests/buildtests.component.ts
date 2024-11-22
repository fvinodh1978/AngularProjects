import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections'
import { AlertService } from '../../services/alert.service'
import { MatDialog } from '@angular/material/dialog';
import { ManagetestsComponent } from '../managetests/managetests.component';
import { DataService } from '../../services/data1.service';
import { TestprofileComponent } from '../../dialogs/testprofile/testprofile.component';
import { TestdetailsComponent } from '../../dialogs/testdetails/testdetails.component';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../../services/data/rest.service';

export interface PeriodicElement {
  id: string;
  name: string;
  suite: string;
  module: string;
  description: string;
  type: string;
  testprofile: string;
  created:Date;
  updated:Date;
  createdby:string;
  updatedby:string;
}

let testcaseList: PeriodicElement[] = [];

let discoveredTests: PeriodicElement[] = [];

@Component({
  selector: 'app-buildtests',
  templateUrl: './buildtests.component.html',
  styleUrl: './buildtests.component.css'
})

export class BuildtestsComponent implements OnInit {

  // Declare Variables
  displayedColumns: string[] = ['select', 'id', 'name', 'suite', 'module', 'description', 'type', 'testprofile', 'delete', 'details']; //, 'created', 'updated', 'createdby','updatedby'];
  // displayedColumns: string[] = ['select', 'id', 'testCaseName', 'description', 'type', 'testProfile', 'delete', 'details'];
  selectedValue: string = '';
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource = new MatTableDataSource(testcaseList);
  options: string[] = [];

  constructor(private alertService: AlertService,
    public dialog: MatDialog,
    private dataService: DataService,
    private http: HttpClient,
    private RestService: RestService,
  ) {
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      console.log(data);
      // return data.feature.toLowerCase().includes(filter) || data.feature.toLowerCase().includes(filter);
      return data.id.toLowerCase().includes(filter) || data.id.toLowerCase().includes(filter);
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterTable() {
    console.log(this.selectedValue.trim());
    if (this.selectedValue === 'All') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filter = this.selectedValue.trim().toLowerCase();
      // this.dataSource.filter = this.selectedValue.trim();
    }
  }

  addRow() {
    const dialogRef = this.dialog.open(TestprofileComponent);
    // const dialogRef = this.dialog.open(ManagetestsComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Item added:', result);
        // Logic to add the new item to your data source
      }
    });
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

  openDialog(): void {
    this.dialog.open(TestprofileComponent);
    // this.dialog.open(ManagetestsComponent);
  }

  onFileSelected1(event: Event): void {
    const input = event.target as HTMLInputElement; if (input.files && input.files.length > 0) {
      const file = input.files[0]; console.log('Selected file:', file.name); // Handle the file as needed 
    }
  }

  fileName: string = 'Choose a Module';
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;
      console.log('Selected file:', file, file.name); // Handle the file as needed
    } else {
      this.fileName = 'No File Chosen';
    }
  }

  discoverTests() {
    if (this.fileName !== 'Choose a Module') {
      console.log('File name sent to backend:', this.fileName);

      this.RestService.discoverTests(this.fileName).subscribe((response) => {
        console.log('API response:', response);

      });
    } else {
      console.error('No file selected to send');
      this.alertService.confirm('Please Select a Module');

    }
  }

  displayTest(record: any) {
    console.log(record);

    let tableData = Object.entries(record).map(([key, value]) => ({ key, value }));
    this.dialog.open(TestdetailsComponent, {
      width: '600px',
      // data: { dataSource: this.dataSource1 }
      data: { dataSource: tableData }
    });
  }

  ngOnInit(): void {

    // testcaseList = [
    //   { id: 1, testCaseName: 'TC006', description: 'US002', type: 'Regression', testSteps: 'He', scriptName: 'Script1', testProfile: 'He' },
    //   { id: 2, testCaseName: 'TC007', description: 'US003', type: 'Sanity', testSteps: 'He', scriptName: 'Script1', testProfile: 'He' },
    // ];

    this.dataService.getData().subscribe(data => {
      testcaseList = data;
      this.options = testcaseList.map(record => record.id);
      this.options = ["All", ...this.options];
      console.log(testcaseList);
      console.log(this.options);
    });
  }
}