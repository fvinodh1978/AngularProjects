import { Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from './account/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  router: Router = inject(Router);
  title = 'CrossCheck';
  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  // Code to display Account dialog
  @ViewChild('openButton', { read: ElementRef }) openButton!: ElementRef;
  constructor(public dialog: MatDialog) { }

  // openAccountDialog(): void {
  //   this.dialog.open(DialogComponent, {
  //     width: '275px',
  //     height: '350px'
  //   });
  // }

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

