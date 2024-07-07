import { Component } from '@angular/core';

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
      imageUrl: "../assets/Shoe1.png"
    }, {
      id: 2,
      name: "Shoe",
      price: "160$",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/Shoe2.png"
    }, {
      id: 3,
      name: "Shoe",
      price: "155$",
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/Shoe3.png"
    }, {
      id: 4,
      name: "Shoe",
      price: 150,
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg"
    }, {
      id: 5,
      name: "Shoe",
      price: 150,
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg"
    }, {
      id: 6,
      name: "Shoe",
      price: 150,
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg"
    }, {
      id: 7,
      name: "Shoe",
      price: 150,
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg"
    }, {
      id: 8,
      name: "Shoe",
      price: 150,
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg"
    }, {
      id: 9,
      name: "Shoe",
      price: 150,
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg"
    }, {
      id: 10,
      name: "Shoe",
      price: 150,
      category: "Running",
      colors: ["white", "blue", "black"],
      imageUrl: "../assets/shopping.jpg"
    }
  ]
}
