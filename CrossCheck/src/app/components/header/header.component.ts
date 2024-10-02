import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router: Router = inject(Router);
  title = 'CrossCheck';
  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');
}
