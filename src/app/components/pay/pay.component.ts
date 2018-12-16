import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  payment=false;
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

  pay(){
    this.payment=true;
    this.cartService.destroy()
  }

}
