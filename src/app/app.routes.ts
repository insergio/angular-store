import { RouterModule, Routes } from '@angular/router';  
import { CatalogComponent } from './components/catalog/catalog.component';

const APP_ROUTES:Routes = [
    { path: '', component:  CatalogComponent },
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );