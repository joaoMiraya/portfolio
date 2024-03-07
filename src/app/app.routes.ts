import { Routes } from '@angular/router';

import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { NotFoundComponent } from './modules/portfolio/components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];
