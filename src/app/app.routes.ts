import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [{
  path: '', redirectTo:'home', pathMatch: 'full'},
{path:'',component:LandingComponent},
{path:'contact',component:ContactComponent},
{path:'login',component:LoginComponent},
{path:'about',component:AboutComponent},];
