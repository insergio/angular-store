import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('sidenavAnimation', [
        state('open', style({
            width: '250px',
        })),
        state('closed', style({
            width: '0px',
        })),
        transition('open => closed', [
          animate('0.3s')
        ]),
        transition('closed => open', [
          animate('0.3s')
        ]),
    ]),

    trigger('cartAnimation', [
      state('open', style({
          opacity: 1,
          display: 'block'
      })),
      state('closed', style({
          opacity: 0,
          display: 'none'
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
  ]),
  ]
})
export class HeaderComponent implements OnInit {

  sidenavIsOpen = false;
  cartIsOpen = false;
  categories
  parents=""
  products=[]

  constructor(public http: HttpClient, private storage:LocalStorageService, private cartService: CartService) { }

  ngOnInit() {
    this.retrieveCategories()
    this.retrieveProducts()
    this.cartService.getProducts().subscribe(data => {
      //do what ever needs doing when data changes
      console.log("change")
      console.log(data)
      this.products=data
    })
  }

  toggleSidenav() {
    this.sidenavIsOpen = !this.sidenavIsOpen;
  }

  toggleCart(){
    this.cartIsOpen = !this.cartIsOpen;
  }

  retrieveProducts(){
    var products=this.storage.retrieve('products')
    if(products){
      console.log("retrieved products")
    }else{
      this.http.get('assets/products.json').subscribe(data => {
         let prod:any = data;
         this.storage.store('products', prod.products);
       }); 
    }
  }

  retrieveCategories(){
    var cattree=this.storage.retrieve('categories')
    if(cattree){
      this.categories=cattree;
      console.log("retrieved")
    }else{
      this.http.get('assets/categories.json').subscribe(data => {
         let cat:any = data;
         this.categories = cat.categories;
         this.storage.store('categories', this.categories);
         console.log(this.categories)
       }); 
    }

  }

  onNotify(){
    this.toggleSidenav()
  }

  


}
