import { Routes } from '@angular/router';
import { IdentityComponent } from './identity/identity.component';
import { LoginComponent } from './identity/login/login.component';
import { RegisterComponent } from './identity/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: IdentityComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];
