import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagetestsComponent } from './pages/managetests/managetests.component';
import { SignupComponent } from './account/signup/signup.component';
import { AnalyticsComponent } from './pages/dashboard/widgets/analytics/analytics.component';
import { ExecutetestsComponent } from './pages/executetests/executetests.component';
import { BuildtestsComponent } from './pages/buildtests/buildtests.component';
import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'buildtest',
    component: BuildtestsComponent
  },
  {
    path: 'executetests',
    component: ExecutetestsComponent
  },
  { path: '**', redirectTo: 'login' }
];


// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'login'
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'executetests',
//     component: AnalyticsComponent
//   },

//   {
//     path: 'tests',
//     component: ManagetestsComponent
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
