import { Component } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  slogan: string = "Tester : Your One Stop Solution for Quality Assurance...";
  logoimg: string = "../assets/shopping.jpg";
  getSlogan() {
    return this.slogan;
  }
}
