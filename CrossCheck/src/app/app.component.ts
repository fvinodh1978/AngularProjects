import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  router: Router = inject(Router);
  title = 'CrossCheck';
  collapsed = signal(false);
  sidenavWidth=computed(()=>this.collapsed()?'65px':'250px');
}

