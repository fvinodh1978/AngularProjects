import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product: {
    id: number,
    name: string,
    price: string,
    category: string,
    colors: string[],
    imageUrl: string,
    discount: number,
    isAvailable: boolean
  }
}
