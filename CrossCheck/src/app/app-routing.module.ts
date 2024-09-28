import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagetestsComponent } from './pages/managetests/managetests.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: AnalyticsComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'tests',
    component: ManagetestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
