import { Routes } from '@angular/router';

import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AdminComponent } from './modules/dashboard/admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];
