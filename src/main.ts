import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HomepageComponent } from './app/homepage/homepage.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomepageComponent },
    ])
  ]
});
