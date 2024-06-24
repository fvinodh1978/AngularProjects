import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  searchValue: string = "Type Here!!!";
  initialiseSearch: string = "Type Here!!!";
  changeSearchValue(eventData: any) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    console.log(this.searchValue);
  }
}
