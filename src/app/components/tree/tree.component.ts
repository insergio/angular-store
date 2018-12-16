import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() categories:any;
  @Input() parents: string;

  constructor(private router:Router) { 
    //this.parents.push(this.category.id)

  }

  ngOnInit() {
   

   
  }

  toCategory(id){
    this.router.navigate(['/catalog/'+this.parents+"/"+id])
  }

  setParent(category){
    
  }

}
