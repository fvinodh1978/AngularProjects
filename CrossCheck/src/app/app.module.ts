import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/Material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';
import { SignupComponent } from './account/signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManagetestsComponent } from './pages/managetests/managetests.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent,
    DashboardComponent,
    AnalyticsComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    HomeComponent,
    ManagetestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
