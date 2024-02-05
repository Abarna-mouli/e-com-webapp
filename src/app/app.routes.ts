import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TracerComponent } from './components/tracer/tracer.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotfoundComponent },
  { path: 'tracer',component:TracerComponent}
];
