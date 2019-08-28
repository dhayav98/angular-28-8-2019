import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { LoginComponent } from './login/login.component';
import { CreateStockExchangeComponent } from './create-stock-exchange/create-stock-exchange.component';
import { CreateNewCompanyComponent } from './create-new-company/create-new-company.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { ListCompanyDetailsComponent } from './list-company-details/list-company-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListIpoDetailsComponent } from './list-ipo-details/list-ipo-details.component';
import { UserIpoDetailsComponent } from './user-ipo-details/user-ipo-details.component';
import { ImportStockPageComponent } from './import-stock-page/import-stock-page.component';
import { ListStockExchangeComponent } from './list-stock-exchange/list-stock-exchange.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLandingPageComponent,
    LoginComponent,
    CreateStockExchangeComponent,
    CreateNewCompanyComponent,
    UserLandingPageComponent,
    ListCompanyDetailsComponent,
    ListIpoDetailsComponent,
    UserIpoDetailsComponent,
    ImportStockPageComponent,
    ListStockExchangeComponent,
    UserRegistrationComponent,
    LogoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
