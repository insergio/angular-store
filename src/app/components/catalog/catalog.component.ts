import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  error=false;
  render;
  currentCategory;
  products=[];
  sort="";
  ascdesc=false;

  constructor(private router:Router, aroute: ActivatedRoute, private storage:LocalStorageService) { 
    aroute.url.subscribe((data) => {
      var routes=[]
      for (let i = 0; i < data.length; i++) {
        routes.push(data[i].path); 
      }
      console.log(routes);
      var cattree=storage.retrieve('categories')
      if(routes[0]!="catalog"){
        this.getCurrentCategory(cattree, routes)
      }

    });
  }

  ngOnInit() {
  }

  getCurrentCategory(categories, routes){
    this.error=false;
    console.log(routes)
    console.log(categories)
    for (let i = 0; i < categories.length; i++) {
      console.log(categories[i].id)
      if(categories[i].id==routes[0]){
        console.log(categories[i].name)
        var ncategories=categories[i].sublevels
        routes.shift()
        console.log("found")
        if(categories && routes[0]){
          return this.getCurrentCategory(ncategories, routes)
        }else{
          if(routes[0]){
            console.log("notfound")
            this.render="NOTFOUND"
            this.error=true;
            return true;
          }else{
            this.currentCategory=categories[i]
            this.getProducts()
            return true;
          }
        }
      }
    }
    console.log("notfound")
    this.render="NOTFOUND"
    this.error=true;
  }  


  getProducts(){
    this.products=[]
    var prod=this.storage.retrieve('products')
    console.log(this.currentCategory.id)
    console.log(prod)
    for (let i = 0; i < prod.length; i++) {
      if(prod[i].sublevel_id==this.currentCategory.id){
        this.products.push(prod[i])
      }
    }
    console.log(this.products)
  }

  toCard(id){
    this.router.navigate(['/product/'+id])
  }

  sortBy(param){
    this.sort=param;
    console.log(this.sort)
  }
  
  toggleOrder(){
    this.ascdesc=!this.ascdesc
  }
}
