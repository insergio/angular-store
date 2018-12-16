import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products=[]

  constructor(private cartService: CartService, private _location: Location, private router:Router) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe(data => {
      //do what ever needs doing when data changes
      console.log("change")
      console.log(data)
      this.products=data
    })
  }

  add(product){
    console.log("asdf")
    if(product.amount<product.quantity){
      product.amount++
    }
  }

  sub(product){
    if(product.amount>0){
      product.amount--
    }
  }

  back(){
    this._location.back();
  }

  toPayment(){
    this.cartService.updateProducts(this.products);
    this.router.navigate(['/pay'])
    
  }

}
