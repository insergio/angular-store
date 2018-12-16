import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {LocalStorageService} from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productSubject: BehaviorSubject<any[]>; 
  products=[]

  
  
  constructor(private storage:LocalStorageService) { 
    this.productSubject = new BehaviorSubject<any[]>([]); 
    var prod=this.storage.retrieve('cart');
    console.log(prod)
    if(prod){
      this.products=prod
      this.productSubject.next(this.products)
    }
  }

  addProduct(product){
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id==product.id){
        this.products[i].amount+=product.amount
        this.save()
        return;
      } 
    }
    this.products.push(product)
    this.save()
  }

  updateProducts(newProducts){
    for (let i = 0; i < newProducts.length; i++) {
      if(newProducts[i].amount==0){
        newProducts.splice(i,1)
      }
    }
    this.products=newProducts
    this.save()
  }

  getProducts(){
    return this.productSubject.asObservable()
  }

  save(){
    this.storage.store('cart', this.products);
    this.productSubject.next(this.products)      
  }

  destroy(){
    this.products=[]
    this.save()
  }
}
