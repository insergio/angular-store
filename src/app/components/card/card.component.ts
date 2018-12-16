import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  currentProduct=null;
  loading=true;

  constructor(private router:Router,  aroute: ActivatedRoute, private storage:LocalStorageService) { 
    aroute.params.subscribe(params => {
      this.getProduct(params.id)
      
   });
  }

  ngOnInit() {
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

}
