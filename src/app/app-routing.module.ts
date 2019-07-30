import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { SearchComponent } from './search/search.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
