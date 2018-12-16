import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  currentProduct=null;
  loading=true;
  public frm: FormGroup;

  constructor(
    private router:Router,  
    aroute: ActivatedRoute, 
    private storage:LocalStorageService, 
    private cartService: CartService
    ) { 
    aroute.params.subscribe(params => {
      this.getProduct(params.id)    
    });

    this.frm = new FormGroup({
      'amount': new FormControl('1', [Validators.required])
    });
  }

  ngOnInit() {
    this.cartService.getProducts().subscribe(data => {
      //do what ever needs doing when data changes
      console.log("change")
      console.log(data)
    })
  }

  getProduct(id){
    var products=this.storage.retrieve('products')
      for (let i = 0; i < products.length; i++) {
        if(products[i].id==id){
          this.currentProduct=products[i];
          this.loading=false;
          return; 
        }
        
      }
    this.loading=false;
  }

  addToCart(form){
    if(form.valid){
      var newProduct = {...this.currentProduct, amount: parseInt(form.value.amount)}
      this.cartService.addProduct(newProduct)
    }

  }

}
