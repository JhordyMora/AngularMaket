import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http : HttpClient
  ) { 
  }

  getAllProducts(){
    return this.http.get<product[]>('https://api.escuelajs.co/api/v1/products?limit=10&offset=0');
  }
}