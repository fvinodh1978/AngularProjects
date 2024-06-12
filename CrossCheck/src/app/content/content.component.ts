import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  displayedColumns: string[] = ['position', 'usstory', 'description', 'testcasecount', 'executed', 'passed', 'failed', 'pending'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  "position":number;
  "usstory": string;
  "description": string;
  "testcasecount": number;
  "executed": number;
  "passed": number;
  "failed": number;
  "pending": number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {'position':1, 'usstory': 'US2024001', description: 'Hydrogen', 'testcasecount': 1.0079, 'executed': 1, 'passed': 1, 'failed':1, 'pending':0},
  {'position':2, 'usstory': 'US2024002', description: 'Helium', 'testcasecount': 4.0026, 'executed': 2, 'passed': 1, 'failed':1, 'pending':0},
  {'position':3, 'usstory': 'US2024003', description: 'Lithium', 'testcasecount': 6.941, 'executed': 3, 'passed': 1, 'failed':1, 'pending':0},
  {'position':4, 'usstory': 'US2024004', description: 'Beryllium', 'testcasecount': 9.0122, 'executed': 4, 'passed': 1, 'failed':1, 'pending':0},
  {'position':5, 'usstory': 'US2024005', description: 'Boron', 'testcasecount': 10.811, 'executed': 5, 'passed': 1, 'failed':1, 'pending':0}
];

