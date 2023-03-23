import { Injectable } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart:product[] = [];
  private myCart = new BehaviorSubject<product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }
  
  getMyShoppingCart(){
    return this.myShoppingCart;
  }
  
  addProduct(product: product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0);
  }
}
