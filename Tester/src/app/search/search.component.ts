import { Component } from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  menu: NavItem[] = [];
  productList: any  = ["Apple", "Orange", "Banana", "Mango", "Jack"];
  products: String[]=[];  
  searchValue: string = "Search";
  initialiseSearch: string = "Type Here!!!";
  changeSearchValue(eventData: any) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    console.log(this.searchValue);
  }

  getSearchItem(event: any) {
    this.searchValue = event.target.value;
  }

  handleSearch(item: String) {
    this.productList = this.getProducts(item);

    // Implement your search logic here

    // this.menu= [
    //   {
    //     displayName: 'Dashboard',
    //     iconName: 'desktop_windows',
    //     route: 'dashboard',
    //   },
    //   {
    //     displayName: 'Manage Access',
    //     iconName: 'house',
    //     route: 'mytasks',
    //   }]
  }

  range(start: number, end: number): number[] {
    start = Math.floor(start);
    end = Math.floor(end);

    const diff = end - start;
    if (diff === 0) {
      return [start];
    }

    const keys = Array(Math.abs(diff) + 1).keys();
    return Array.from(keys).map(x => {
      const increment = end > start ? x : -x;
      return start + increment;
    });
  }

  getProducts(item: String): String[] {
    console.log(item);
    if (this.productList.indexOf(item) !== -1) {
      this.products.push(item);
    }
    return this.products;
  }
}
