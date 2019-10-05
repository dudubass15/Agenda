import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { SearchComponent } from './search/search.component';
import { FormCommitmentComponent } from './form-commitment/form-commitment.component';
import { InfoAppComponent } from './utilidades/modais/info-app/info-app.component';
import { LoginComponent } from './users/login/login.component';
import { VisualizarCardComponent } from './cards/visualizar-card/visualizar-card.component';
import { AuthGuard } from './guards/auth.guard';
import { Page404Component } from './errors/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: BodyComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: BodyComponent
  },
  {
    path: 'search',
    canActivate: [AuthGuard],
    component: SearchComponent
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    component: FormCommitmentComponent
  },
  {
    path: 'modal',
    canActivate: [AuthGuard],
    component: InfoAppComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'compromisso/visualizar/:id',
    canActivate: [AuthGuard],
    component: VisualizarCardComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
