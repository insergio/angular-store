import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products=[]

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe(data => {
      //do what ever needs doing when data changes
      console.log("change")
      console.log(data)
      this.products=data
    })
  }

}
