import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() categories:any;
  @Input() parents: string;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router:Router) { 
    //this.parents.push(this.category.id)

  }

  ngOnInit() {
   

   
  }

  onNotify(event){
    this.notify.emit(event)
  }

  toCategory(id){
    this.notify.emit()
    this.router.navigate(['/catalog/'+this.parents+"/"+id])
  }

  setParent(category){
    
  }

}
