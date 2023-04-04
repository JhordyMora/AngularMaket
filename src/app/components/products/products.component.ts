import { Component, OnInit } from '@angular/core';
import { ProductDTO, UpdateDTO, product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit{
  total = 0;
  myShoppingCart:product[] = [];
  products: product[] = []
  today = new Date();
  date = new Date(2021, 1 ,21);
  showProductDetail = false; 
  productChosen: product={
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
  limit = 10;
  offset = 0;

  constructor(
    private storeService : StoreService,
    private productService : ProductsService
  ){
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }

  ngOnInit(): void {
    this.loadingPage(this.limit, this.offset);

  }
  // products: product[] = this.productService.getAllProducts();

  onAddToShoppingCart(product: product){
    this.storeService.addProduct(product);
    console.log(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string){

    this.toggleProductDetail();
    if(this.showProductDetail==true){

      this.productService.getProduct(id)
        .subscribe(data => {
          console.log("product", data);
          // this.toggleProductDetail();
          this.productChosen = data;
        });
    }
  }

  createNewProduct(){
    const product: ProductDTO = {
      title: "nuevo producto",
      description: "El nuevo producto bla bla bla",
      images: [
        "https://st.depositphotos.com/1024122/1332/i/950/depositphotos_13320511-stock-photo-businessman-holding-paper.jpg",
        "https://st4.depositphotos.com/1000975/40568/i/1600/depositphotos_405689828-stock-photo-businessman-telling-lies-isolated-on.jpg"
      ],
      price: 1000,
      categoryId: 2,
    }
    this.productService.create(product)
      .subscribe(data =>{
        this.products.unshift(data);
        console.log("created", data);
      })
  }

  updateProduct(){
    const change : UpdateDTO = {
      title: "nuevo titulo",
    }
    const id = this.productChosen.id;
    this.productService.update(id, change).subscribe(data => { 
      const productIndex = this.products.findIndex(item => item.id===id);
      this.products[productIndex] = data;
      this.productChosen = data;
    })
  }

  deleteProduct(){
    const id = this.productChosen.id;
    this.productService.delete(id)
      .subscribe(()=>{
        const productIndex = this.products.findIndex(item => item.id===id);
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      })
  }

  loadMore(){
    this.offset += 10;
    this.loadingPage(this.limit, this.offset);
  }

  private loadingPage(limit: number, offset: number){
    this.productService.getProductsByPage(limit, offset)
    .subscribe(data =>{
      this.products = this.products.concat(data);
      console.log(data);
    });
  }
}
