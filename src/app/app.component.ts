import { Component } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store-2';
  title2: String = "Este es un texto en app component";
  imageSrc: String = "Agrege la url de la imagen que quiera mostrar"//"https://www.w3schools.com/howto/img_avatar.png";
  
  product1: product = {
    id: "1",
    name: "product1",
    imageUrl: "https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_960_720.jpg",
    price: Math.random()*100,

  }
  product2: product = {
    id: "2",
    name: "product2",
    imageUrl: "https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_960_720.jpg",
    price: Math.random()*100,

  }
  product3: product = {
    id: "3",
    name: "product3",
    imageUrl: "https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_960_720.jpg",
    price: Math.random()*100,

  }
  products: product[]= [this.product1, this.product2, this.product3]

  onLoaded(img: String){
    console.log("Log padre", img)
  }
}
