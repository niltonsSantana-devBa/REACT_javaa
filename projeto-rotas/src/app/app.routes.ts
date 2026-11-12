import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Ususarios } from './pages/ususarios/ususarios';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'usuarios', component: Ususarios},
    {path: '**', redirectTo: '',}
];
