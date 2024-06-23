import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class ="notification-div alert alert-success">
                <p>This Website uses cookies to provide better user experience</p>
             <div>`,
  styles: [".notification-div{margin:10px 0px; padding: 10px 20px; text-align:center;}", 
           "p{font-size:14px;}"]
})
export class NotificationComponent {

}
