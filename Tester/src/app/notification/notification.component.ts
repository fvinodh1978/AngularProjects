import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class ="notification-div alert alert-success" [hidden]="displayNotification">
                This Website uses cookies to provide better user experience you could feel the difference
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
             <div>`,
  styles: [".notification-div{margin:10px 0px; padding: 10px 20px; text-align:center;}",
    "p{font-size:16px;}",
    ".close{float:right; margin-top:-10px}"
  ]
})
export class NotificationComponent {

  displayNotification: boolean = false;
  closeNotification() {
    this.displayNotification = true;
  }
}
