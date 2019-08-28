import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { CreateNewCompanyComponent } from './create-new-company/create-new-company.component';
import { ListCompanyDetailsComponent } from './list-company-details/list-company-details.component';
import { CreateStockExchangeComponent } from './create-stock-exchange/create-stock-exchange.component';
import { ListStockExchangeComponent } from './list-stock-exchange/list-stock-exchange.component';
import { ListIpoDetailsComponent } from './list-ipo-details/list-ipo-details.component';
import { UserIpoDetailsComponent } from './user-ipo-details/user-ipo-details.component';
import { ImportStockPageComponent } from './import-stock-page/import-stock-page.component';
import { AuthenticateSessionService } from './service/authenticate-session.service';
import { LogoutComponent } from './logout/logout.component';



const routes: Routes = [
  {path:'',redirectTo:'login-page',pathMatch:'full'},
  {path:'login-page',component:LoginComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'admin-landing-page',component:AdminLandingPageComponent,canActivate:[AuthenticateSessionService]},
  {path:'import-stock-page',component:ImportStockPageComponent,canActivate:[AuthenticateSessionService]},
  {path:'create-new-company',component:CreateNewCompanyComponent,canActivate:[AuthenticateSessionService]},
  {path:'list-company-details',component:ListCompanyDetailsComponent,canActivate:[AuthenticateSessionService]},
  {path:'create-stock-exchange',component:CreateStockExchangeComponent,canActivate:[AuthenticateSessionService]},
  {path:'list-stock-exchange',component: ListStockExchangeComponent,canActivate:[AuthenticateSessionService]},
  {path:'list-ipo-details',component:ListIpoDetailsComponent,canActivate:[AuthenticateSessionService]},
  {path:'user-ipo-details',component:UserIpoDetailsComponent},
  {path:'logout',component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
