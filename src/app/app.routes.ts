import { RouterModule, Routes } from '@angular/router';  
import { CatalogComponent } from './components/catalog/catalog.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';



const APP_ROUTES:Routes = [
    { path: 'catalog', component:  CatalogComponent },
    { path: 'product/:id', component:  CardComponent },
    { path: 'cart', component:  CartComponent },

    {path: 'catalog', children: [
        {path: '**', component: CatalogComponent}
    ]},

    /* { path: '**', pathMatch:'full', redirectTo:'catalog'} */


];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );