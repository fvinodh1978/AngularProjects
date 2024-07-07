import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
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
