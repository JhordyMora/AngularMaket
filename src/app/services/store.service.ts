import { Injectable } from '@angular/core';
import { product } from 'src/app/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart:product[] = [];

  constructor() { }
  
  getMyShoppingCart(){
    return this.myShoppingCart;
  }
  
  addProduct(product: product){
    this.myShoppingCart.push(product);
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0);
  }
}
