import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CrossCheck';
  collapsed = signal(false);
  sidenavWidth=computed(()=>this.collapsed()?'65px':'250px');
}

