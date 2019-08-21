import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { SearchComponent } from './search/search.component';
import { FormCommitmentComponent } from './form-commitment/form-commitment.component';
import { InfoAppComponent } from './utilidades/modais/info-app/info-app.component';


const routes: Routes = [
  {
    path: '', component: BodyComponent
  },
  {
    path: 'home', component: BodyComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'add', component: FormCommitmentComponent
  },
  {
    path: 'modal', component: InfoAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
