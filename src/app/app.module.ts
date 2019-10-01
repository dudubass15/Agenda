import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { FormCommitmentComponent } from './form-commitment/form-commitment.component';
import { InfoAppComponent } from './utilidades/modais/info-app/info-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { VisualizarCardComponent } from './cards/visualizar-card/visualizar-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    CardsComponent,
    SearchComponent,
    FormCommitmentComponent,
    InfoAppComponent,
    VisualizarCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
