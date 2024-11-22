import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from '../../services/data/rest.service';
import { Subscription, interval, switchMap } from 'rxjs';

export interface PeriodicElement {
  name: string;
  feature: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface DialogData {
  dataSource: PeriodicElement;
}

// export interface DialogData {
//   dataSource: any[];
// }

@Component({
  selector: 'app-executionstudio',
  templateUrl: './executionstudio.component.html',
  styleUrl: './executionstudio.component.css'
})

export class ExecutionstudioComponent {
  displayedColumns: string[] = ['key', 'value'];
  testCaseName: string = "";
  testScript: string = "";
  testProfile: string = "";
  topMaximized = false;
  bottomMaximized = false;
  isFullScreen = false
  dataSource!: PeriodicElement;
  myObj = {};

  constructor(
    public dialogRef: MatDialogRef<ExecutionstudioComponent>,
    private renderer: Renderer2,
    private RestService: RestService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    // this.dataSource = new MatTableDataSource(data.dataSource); // Initialize the data source properly
    this.testCaseName = data.dataSource['name']
    this.testScript = data.dataSource['feature']
    this.testProfile = data.dataSource['symbol']
    // this.myObj=data.dataSource;
    console.log(this.testCaseName);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  toggleFullScreen() {
    const containerDiv = document.getElementById('containerDiv');
    if (containerDiv) {
      if (!this.isFullScreen) {
        this.renderer.setStyle(containerDiv, 'position', 'fixed');
        this.renderer.setStyle(containerDiv, 'top', '0');
        this.renderer.setStyle(containerDiv, 'left', '0');
        this.renderer.setStyle(containerDiv, 'width', '100%');
        this.renderer.setStyle(containerDiv, 'width', '100vw');
        this.renderer.setStyle(containerDiv, 'height', '100%');
        this.renderer.setStyle(containerDiv, 'height', '100vh');
        this.renderer.setStyle(containerDiv, 'z-index', '9999');
        this.renderer.setStyle(containerDiv, 'background-color', 'white'); // Ensure non-transparency
      } else {
        this.renderer.removeStyle(containerDiv, 'position');
        this.renderer.removeStyle(containerDiv, 'top');
        this.renderer.removeStyle(containerDiv, 'left');
        this.renderer.removeStyle(containerDiv, 'width');
        this.renderer.removeStyle(containerDiv, 'height');
        this.renderer.removeStyle(containerDiv, 'z-index');
        this.renderer.setStyle(containerDiv, 'background-color', 'white'); // Maintain default background color
      }
      this.isFullScreen = !this.isFullScreen;
    }
  }

  closeContainer() {
    const containerDiv = document.getElementById('containerDiv');
    if (containerDiv) {
      containerDiv.style.display = 'Close';
    }
  }

  liveData: string = '';
  subscription: Subscription = new Subscription;
  input1: string = '';
  input2: string = '';
  selectedOption: string = ''; // Initialize with a default value

  executeTests1(data: PeriodicElement) {
    console.log('Executing row:' + data.feature);
    // Add your execution logic here

    // this.RestApiService.getAllData().subscribe((response) => {
    this.RestService.fetchOutput().subscribe((response) => {
      console.log('API response:', response);
      // this.rapidPage= response[0]['testCaseName'];
      this.liveData = JSON.stringify(response);
    });

    // console.log('Button clicked!', event);
    console.log('Input 1:', this.input1);
    console.log('Input 2:', this.input2);
    console.log('Selected Option:', this.selectedOption);
    const response = '{"data": "UpdatedPage"}';

    console.log('Received Data:', this.liveData);
    // Add your custom logic here
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const containerDiv = document.getElementById('containerDiv');
    if (containerDiv) {
      if (this.isFullScreen) {
        containerDiv.style.width = '100vw';
        containerDiv.style.height = '100vh';
      }
    }
  }

  executeTests(data: PeriodicElement) {
    this.subscription = interval(5000).pipe(
      switchMap(() => this.RestService.fetchOutput())
    ).subscribe(data => {
      // this.liveData = data.output;
      this.liveData += `${data.output}`;
    });
  }

  terminateScript() {
    this.RestService.terminateScript().subscribe(response => {
      console.log('Script terminated:', response.status);
    });
  }

  // ngOnInit() {
  //   this.subscription = interval(5000).pipe(
  //     switchMap(() => this.RestService.fetchOutput())).subscribe(data => {
  //       this.liveData += `${data.output}`;
  //     });
  // }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
