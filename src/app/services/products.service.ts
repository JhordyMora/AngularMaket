import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { UpdateDTO, product } from '../models/product.model';
import { ProductDTO } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl ='https://young-sands-07814.herokuapp.com/api/products'; 

  constructor(
    private http : HttpClient
  ) { 
  }

  getAllProducts(limit?: number, offset?: number){
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<product[]>(`${this.apiUrl}`, { params });
  }

  getProduct(id: string){
    return this.http.get<product>(`${this.apiUrl}/${id}`)
  }

  getProductsByPage(limit: number, offset: number){
    return this.http.get<product[]>(`${this.apiUrl}`,{
      params: {limit, offset}
    });
  }

  create(productDTO : ProductDTO){
    return this.http.post<product>(`${this.apiUrl}/}`, productDTO); 
  }
  
  update(id: string, dto: UpdateDTO){
    return this.http.put<product>(`${this.apiUrl}/${id}`, dto); 
  }

  delete(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }
}