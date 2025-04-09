import { Routes } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [  { path: '', component: HomepageComponent },
    { path: 'terms', component: TermsComponent }];
