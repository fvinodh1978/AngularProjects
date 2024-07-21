import { Component, Output, Input } from '@angular/core';
import { ProductTemplate } from './product-template';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {



  products = [
    {
      id: 1,
      name: "Shoe",
      price: "150$",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/Shoe1.png",
      discount: 50,
      isAvailable: true
    }, {
      id: 2,
      name: "Shoe",
      price: "160$",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/Shoe2.png",
      discount: 50,
      isAvailable: true
    }, {
      id: 3,
      name: "Shoe",
      price: "155$",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/Shoe3.png",
      discount: 0,
      isAvailable: false
    }, {
      id: 4,
      name: "Flower",
      price: "150",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg",
      discount: 10,
      isAvailable: true
    }, {
      id: 5,
      name: "Flower",
      price: "150",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg",
      discount: 0,
      isAvailable: true
    }, {
      id: 6,
      name: "Flower",
      price: "150",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg",
      discount: 0,
      isAvailable: true
    }, {
      id: 7,
      name: "Flower",
      price: "150",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg",
      discount: 0,
      isAvailable: true
    }, {
      id: 8,
      name: "Flower",
      price: "150",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg",
      discount: 0,
      isAvailable: true
    }, {
      id: 9,
      name: "Flower",
      price: "150",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg",
      discount: 0,
      isAvailable: true
    }, {
      id: 10,
      name: "Flower",
      price: "150",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg",
      discount: 10,
      isAvailable: false
    }
  ]

  totalProducts: number = this.products.length;
  inStockProducts: number = this.products.filter(p => p.isAvailable === true).length
  outOfStockProducts: number = this.products.filter(p => p.isAvailable === false).length
  selectedFilter: string = "all";

  @Input()
  searchText: string = "";

  onFilterChange(filterValue: string) {
    console.log(filterValue)
    this.selectedFilter = filterValue;
  }
}

