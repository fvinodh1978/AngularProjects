import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  selectedFilter: string = 'all';

  @Output()
  selectedFilterChange: EventEmitter<string> = new EventEmitter<string>();

  onFilterChange() {
    console.log(this.selectedFilter)
    this.selectedFilterChange.emit(this.selectedFilter)
  }

}
