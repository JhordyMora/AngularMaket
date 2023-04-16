import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

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
  
  constructor(
    private filesService: FilesService,
    private usersService: UsersService,
  ){}

  onLoaded(img: string) {
    console.log('Log padre', img);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
  
  createUser(){
    this.usersService.createUser({
      "name":"donPrueba",
      "email": "prueba@mail.com", 
      "password": "prueba"
    }).subscribe({
      next: (dataRta)=>{console.log(dataRta)},
    });
  }
  
  downloadPdf(){
    this.filesService.getFile('myPdf.pdf','https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
      .subscribe();
  }


}
