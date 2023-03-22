import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: product = {
    id: "",
    price: 0,
    name: "",
    imageUrl:""
  };

  @Output() addedProduct = new EventEmitter<product>();

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
}
