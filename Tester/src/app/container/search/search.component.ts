import { Component, EventEmitter, Output} from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  menu: NavItem[] = [];
  productList: any = ["Apple", "Orange", "Banana", "Mango", "Jack"];
  products: String[] = [];
  searchValue: string = "";
  initialiseSearch: string = "Type Here!!!";
  changeSearchValue(eventData: any) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    console.log(this.searchValue);
  }

  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchValue);
  }

  getSearchItem(event: any) {
    this.searchValue = event.target.value;
  }

  handleSearch(item: HTMLInputElement) {
    this.searchValue=item.value
    this.searchTextChanged.emit(this.searchValue);
  }
}
