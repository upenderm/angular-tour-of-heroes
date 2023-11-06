import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularDefaultComponent } from './angular-default/angular-default.component';

const routes: Routes = [
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'angular-tutorial', component: AngularDefaultComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',   redirectTo: '/welcome-page', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: GlobalErrorComponent },  // Wildcard route for a 404 page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
