import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  title = 'CrossCheck';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= false;
  isCollapsed = false;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.toggle(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

  menu: NavItem [] = [
    {
      displayName: 'Dashboard',
      iconName: 'desktop_windows',
      route: 'dashboard',
    },        
    {
      displayName: 'Manage Access',
      iconName: 'house',
      route: 'mytasks',
    },
    {
      displayName: 'My Tasks',
      iconName: 'description',          
      children: [
        {
          displayName: 'Completed',
          iconName: 'how_to_reg',
          route: '/misexpedientes'
        },
        { 
          displayName: 'Todos',
          iconName: 'waves',
          route: '/todos'
        }
      ]
    },
    {
      displayName: 'Profile',
      iconName: 'group',
      children: [
          {
            displayName: 'Búsqueda Perfil',
            iconName: 'search',
            route: '/busquedaperfiles'
          }
        ]
      }
  ];  
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
