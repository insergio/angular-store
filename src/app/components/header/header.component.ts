import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('sidenavAnimation', [
        state('open', style({
            width: '250px',
        })),
        state('closed', style({
            width: '0px',
        })),
        transition('open => closed', [
          animate('0.3s')
        ]),
        transition('closed => open', [
          animate('0.3s')
        ]),
    ]),

    trigger('cartAnimation', [
      state('open', style({
          opacity: 1,
      })),
      state('closed', style({
          opacity: 0,
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
  ]),
  ]
})
export class HeaderComponent implements OnInit {

  sidenavIsOpen = false;
  cartIsOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavIsOpen = !this.sidenavIsOpen;
  }

  toggleCart(){
    this.cartIsOpen = !this.cartIsOpen;
  }

}
