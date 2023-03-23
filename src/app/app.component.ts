import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store-2';
  title2 = 'Este es un texto en app component';
  imageSrc = 'Agrege la url de la imagen que quiera mostrar'; //"https://www.w3schools.com/howto/img_avatar.png";
  showImage = true;

  onLoaded(img: string) {
    console.log('Log padre', img);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
