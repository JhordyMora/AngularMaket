import { Component } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  total: number = 0;
  myShoppingCart:product[] = [];

  product1: product = {
    id: '1',
    name: 'product1',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_960_720.jpg',
    price: Math.random() * 100,
  };
  product2: product = {
    id: '2',
    name: 'product2',
    imageUrl:
      'https://static.giga.de/wp-content/uploads/2021/09/random-GettyImages-531316319-rcm850x478u.jpg',
    price: Math.random() * 100,
  };
  product3: product = {
    id: '3',
    name: 'product3',
    imageUrl: 'https://i.redd.it/jeuusd992wd41.jpg',
    price: Math.random() * 100,
  };
  product4: product = {
    id: '4',
    name: 'product4',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_960_720.jpg',
    price: Math.random() * 100,
  };
  product5: product = {
    id: '5',
    name: 'product5',
    imageUrl:
      'https://static.giga.de/wp-content/uploads/2021/09/random-GettyImages-531316319-rcm850x478u.jpg',
    price: Math.random() * 100,
  };
  product6: product = {
    id: '6',
    name: 'product6',
    imageUrl: 'https://i.redd.it/jeuusd992wd41.jpg',
    price: Math.random() * 100,
  };
  products: product[] = [this.product1, this.product2, this.product3,this.product4, this.product5, this.product6];
  
  onAddToShoppingCart(product: product){
    console.log(product);
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0)
  }
}
