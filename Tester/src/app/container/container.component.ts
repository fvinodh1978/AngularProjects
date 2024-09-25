import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchValue = "";
  setSearchText(value:string) {
    this.searchValue = value;
    console.log(value);
  }
}
