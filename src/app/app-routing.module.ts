import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsListComponent } from './finance-tools/actions/actions-list/actions-list.component';
import { AddActionsComponent } from './finance-tools/actions/add-actions/add-actions.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {path: 'actions', component: ActionsListComponent, canActivate: [AuthGuard]},
  {path: 'add-actions', component: AddActionsComponent, canActivate: [AuthGuard]},
  {
     path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  
    }, 
  { 
    path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
