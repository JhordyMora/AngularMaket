import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

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
  token = '';
  
  constructor(
    private authService: AuthService,
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

  login(){
    this.authService.login(
      "prueba@mail.com", 
      "prueba"
    ).subscribe({
      next: (dataRta)=>{
        this.token = dataRta.access_token;
        console.log(dataRta.access_token)},
    });
  }

  getProfile(){
    this.authService.profile(this.token)
      .subscribe(profile => {
        console.log(profile)
      });
  }
}
