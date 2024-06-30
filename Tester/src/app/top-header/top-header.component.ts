import { Component } from '@angular/core';

@Component({
  selector: '#app-top-header',
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
  displayNotification: boolean = false;
  now = new Date();
  closeNotification() {
    this.displayNotification = true;
  }

  product = {
    inStock: 0
  }
  getCurrentTime() {
    return this.now;
  }
}
