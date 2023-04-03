import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: product = {
    id: '',
    price: 0,
    title: "",
    images:[""],
    description: "",
    category: {
      id : "",
      name : "",
    }, 
  };

  @Output() addedProduct = new EventEmitter<product>();
  @Output() showProduct = new EventEmitter<string>();

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

  onShowDetail(){
    this.showProduct.emit(this.product.id);
  }
}
