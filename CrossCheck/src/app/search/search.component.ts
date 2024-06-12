import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  label="Search";
  filteredLocationList: string[] = [];
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = [];
      return;
    }
  }
}
