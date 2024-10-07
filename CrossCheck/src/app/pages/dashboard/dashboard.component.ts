import { Component, inject, OnInit, signal } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ViewsComponent } from './widgets/views/views.component';
import { SubscribersComponent } from './widgets/subscribers/subscribers.component';
import { AnalyticsComponent } from './widgets/analytics/analytics.component';
import { TeststatusComponent } from './widgets/teststatus/teststatus.component';
import { Widget } from '../../model/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DashboardService]
})
export class DashboardComponent {

  store=inject(DashboardService);

}
