import { Routes } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
export const routes: Routes = [  { path: '', component: HomepageComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'join-us', component: JoinUsComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },];