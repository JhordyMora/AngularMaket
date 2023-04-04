import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UpdateDTO, product } from '../models/product.model';
import { ProductDTO } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl ='https://young-sands-07814.herokuapp.com/api/products/'; 

  constructor(
    private http : HttpClient
  ) { 
  }

  getAllProducts(){
    return this.http.get<product[]>(this.apiUrl);
  }

  getProduct(id: string){
    return this.http.get<product>(`${this.apiUrl}${id}`)
  }

  create(productDTO : ProductDTO){
    return this.http.post<product>(this.apiUrl, productDTO); 
  }
  
  update(id: string, dto: UpdateDTO){
    return this.http.put<product>(`${this.apiUrl}${id}`, dto); 
  }
}