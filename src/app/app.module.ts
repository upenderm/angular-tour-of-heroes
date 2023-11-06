import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularDefaultComponent } from './angular-default/angular-default.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularDefaultComponent,
    WelcomePageComponent,
    LoginComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    GlobalErrorComponent,
    DashboardComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
