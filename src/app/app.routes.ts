import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CareersComponent } from './pages/careers/careers.component';
import { AboutComponent } from './pages/about/about.component';
import { SecurityComponent } from './pages/security/security.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'about', component: AboutComponent },
    { path: 'security', component: SecurityComponent },
    { path: 'signup', component: SignupComponent },
];