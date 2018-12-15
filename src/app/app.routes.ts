import { RouterModule, Routes } from '@angular/router';  
import { CatalogComponent } from './components/catalog/catalog.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';



const APP_ROUTES:Routes = [
    { path: '', component:  CatalogComponent },
    { path: 'product', component:  CardComponent },
    { path: 'cart', component:  CartComponent },


];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );