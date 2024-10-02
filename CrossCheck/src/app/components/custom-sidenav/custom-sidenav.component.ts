import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
  menuitems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'home'
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'manage_accounts',
      label: 'Manage Accounts',
      route: 'accounts'
    },
    {
      icon: 'science',
      label: 'Build Tests',
      route: 'tests'
    },
    {
      icon: 'play_arrow',
      label: 'Execute Tests',
      route: 'executetests'
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'comments',
      label: 'Comments',
      route: 'comments'
    }
  ]);
}
