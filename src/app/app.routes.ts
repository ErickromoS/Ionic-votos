import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'modal-info',
    loadComponent: () => import('./modal-info/modal-info.page').then( m => m.ModalInfoPage)
  },
  {
    path: 'login-page',
    loadComponent: () => import('./login-page/login-page.page').then( m => m.LoginPagePage)
  },
];
