import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { User} from '../../models/user.model'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  sideMenuIsActive = false;
  counter = 0;
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private authService : AuthService, 
  ){ }

  toggleSideMenu(){
    this.sideMenuIsActive = !this.sideMenuIsActive;
  }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => this.counter = products.length);
  }

  login(){
    this.authService.login(
      "prueba@mail.com", 
      "prueba"
    ).subscribe({
      next: (dataRta)=>{
        this.getProfile(),
        console.log(dataRta.access_token)
      },
    });
  }

  getProfile(){
    this.authService.profile()
      .subscribe(user => {
        console.log(user);
        this.profile = user;
      });
  }
  
}
