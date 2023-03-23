import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit{
  total: number = 0;
  myShoppingCart:product[] = [];
  products: product[] = []
  today = new Date();
  date = new Date(2021, 1 ,21);

  constructor(
    private storeService : StoreService,
    private productService : ProductsService
  ){
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }

  ngOnInit(): void {
      this.productService.getAllProducts()
        .subscribe(data =>{
          this.products = data
          console.log(data);
        });
  }
  // products: product[] = this.productService.getAllProducts();

  onAddToShoppingCart(product: product){
    this.storeService.addProduct(product);
    console.log(product);
    this.total = this.storeService.getTotal();
  }
}
