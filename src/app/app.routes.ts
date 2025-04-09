import { Routes } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JoinUsComponent } from './join-us/join-us.component';

export const routes: Routes = [  { path: '', component: HomepageComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'join-us', component: JoinUsComponent }];
