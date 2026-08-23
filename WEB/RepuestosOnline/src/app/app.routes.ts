import { Routes } from '@angular/router';
import { Home } from './Paginas/home/home';
import { Menu } from './Componentes/menu/menu';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},    
    {path: 'home', component: Home},
    {path: 'Shop', component: Home},
    {path: 'Brands', component: Home},
    {path: 'Deals', component: Home},
    {path: 'My-Garage', component: Menu},
];
