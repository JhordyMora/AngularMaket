import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  sideMenuIsActive: Boolean = false;
  counter: number = 0;

  constructor(
    private storeService: StoreService
  ){ }

  toggleSideMenu(){
    this.sideMenuIsActive = !this.sideMenuIsActive;
  }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => this.counter = products.length);
  }

}
