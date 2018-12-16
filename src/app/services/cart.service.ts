import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productSubject: BehaviorSubject<any[]>; 
  products=[]

  
  
  constructor() { 
    this.productSubject = new BehaviorSubject<any[]>([]); 
  }
  
    addProduct(product){
      this.products.push(product)
      this.productSubject.next(this.products)
    }
  
    getProducts(){
      return this.productSubject.asObservable()
    }
}
