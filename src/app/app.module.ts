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
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { VisualizarCardComponent } from './cards/visualizar-card/visualizar-card.component';
import { ButtonCardArquivarComponent } from './cards/visualizar-card/button-card-arquivar/button-card-arquivar.component';
import { AuthService } from './services/http/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { Page404Component } from './errors/page404/page404.component';

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
    UsersComponent,
    LoginComponent,
    VisualizarCardComponent,
    ButtonCardArquivarComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
