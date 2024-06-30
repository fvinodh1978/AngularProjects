import { Component } from '@angular/core';

@Component({
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  menu:String[]=["Home", "Reports", "Projects", "About", "Contact", "Services"];
  logoimg: string = "../assets/logoimg.jpg";
  sitename: string = "Tester";
  searchValue: string = "Search";
  initialiseSearch: string = "   Search";
  changeSearchValue(eventData: any) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    console.log(this.searchValue);
  }

  handleSearchClick() {
    console.log("Search button clicked!");
    // Implement your search logic here
}
}
