import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule, MatIcon } from '@angular/Material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';
import { SignupComponent } from './account/signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManagetestsComponent } from './pages/managetests/managetests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActiveusersComponent } from './admin/activeusers/activeusers.component';
import { ApproveusersComponent } from './admin/approveusers/approveusers.component';
import { HttpClientModule } from '@angular/common/http';
import { WidgetComponent } from './components/widget/widget.component';
import { ViewsComponent } from './pages/dashboard/widgets/views/views.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgComponentOutlet } from '@angular/common';
import { DialogComponent } from './account/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SubscribersComponent } from './pages/dashboard/widgets/subscribers/subscribers.component';
import { AnalyticsComponent } from './pages/dashboard/widgets/analytics/analytics.component';
import { TeststatusComponent } from './pages/dashboard/widgets/teststatus/teststatus.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSidenavComponent,
    AnalyticsComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    HomeComponent,
    ManagetestsComponent,
    HeaderComponent,
    FooterComponent,
    ActiveusersComponent,
    ApproveusersComponent,
    ViewsComponent,
    DashboardComponent,
    DialogComponent,
    SubscribersComponent,
    AnalyticsComponent,
    TeststatusComponent,
    WidgetComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgComponentOutlet,
    MatDialogModule,
    MatIcon
  ],
  exports: [WidgetComponent], // Export the component here
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
