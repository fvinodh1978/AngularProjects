import { Component, computed, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections'
import { AlertService } from '../../services/alert.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ManagetestsComponent } from '../managetests/managetests.component';
import { DataService } from '../../services/data1.service';
import { TestprofileComponent } from '../../dialogs/testprofile/testprofile.component';
import { TestdetailsComponent } from '../../dialogs/testdetails/testdetails.component';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../../services/data/rest.service';
import { DialogComponent } from '../../account/dialog/dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router'; // Import Router
import { SummaryComponent } from '../../dialogs/discovertests/summary/summary.component';

export interface PeriodicElement {
  id: string;
  name: string;
  suite: string;
  module: string;
  description: string;
  type: string;
  testprofile: string;
  created: Date;
  updated: Date;
  createdby: string;
  updatedby: string;
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
  displayedColumns: string[] = ['select', 'search', 'id', 'name', 'suite', 'module', 'description', 'type', 'testprofile', 'delete', 'details']; //, 'created', 'updated', 'createdby','updatedby'];
  // displayedColumns: string[] = ['select', 'id', 'testCaseName', 'description', 'type', 'testProfile', 'delete', 'details'];
  selectedValue: string = '';
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource = new MatTableDataSource(testcaseList);
  options: string[] = [];
  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '0px' : '250px');

  @ViewChild('openButton', { read: ElementRef }) openButton!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  totalLength: number = 0; // Declare totalLength property
  pageEvent!: PageEvent;

  constructor(private alertService: AlertService,
    public dialog: MatDialog,
    private dataService: DataService,
    private http: HttpClient,
    private RestService: RestService,
    private router: Router
  ) {
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      console.log(data);
      // return data.feature.toLowerCase().includes(filter) || data.feature.toLowerCase().includes(filter);
      return data.id.toLowerCase().includes(filter) || data.id.toLowerCase().includes(filter);
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Assign the paginator to the data source 
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      testcaseList = data;
      this.options = testcaseList.map(record => record.id);
      this.options = ["All", ...this.options];
      console.log(testcaseList);
      console.log(this.options);
      // this.dataSource=data
    });
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

  displayTest(record: any) {
    console.log(record);
    let tableData = Object.entries(record).map(([key, value]) => ({ key, value }));
    console.log(tableData);
    this.dialog.open(TestdetailsComponent, {
      width: '600px',
      data: { dataSource: tableData }
    });
  }


  refreshTable(): void {
    this.dataService.getData().subscribe(data => {
      this.dataSource.data = data;
      this.totalLength = data.length;
      this.paginator.firstPage(); // Reset paginator to the first page
    });
  }


  goHome(): void {
    this.router.navigate(['/home']); // Navigate to the home screen
  }

  submitSelection(): void {
    this.dataService.getData().subscribe(data => {
      testcaseList = data;
      this.options = testcaseList.map(record => record.id);
      this.options = ["All", ...this.options];
      console.log(testcaseList);
      console.log(this.options);
      // this.dataSource=data
    });
  }

  openAccountDialog(): void {
    const rect = this.openButton.nativeElement.getBoundingClientRect();
    const dialogConfig = new MatDialogConfig();

    // Calculate position to ensure dialog stays within viewport
    const dialogWidth = 300; // Adjust based on your dialog width
    const dialogHeight = 400; // Adjust based on your dialog height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = rect.bottom;
    let left = rect.left;

    if (left + dialogWidth > viewportWidth) {
      left = viewportWidth - dialogWidth;
    }

    if (top + dialogHeight > viewportHeight) {
      top = viewportHeight - dialogHeight;
    }

    dialogConfig.position = {
      top: `${top}px`,
      left: `${left}px`,
    };

    this.dialog.open(DialogComponent, dialogConfig);
  }
}