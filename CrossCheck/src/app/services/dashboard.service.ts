import { Injectable, signal } from '@angular/core';
import { Widget } from '../model/dashboard';
import { ViewsComponent } from '../pages/dashboard/widgets/views/views.component';
import { TeststatusComponent } from '../pages/dashboard/widgets/teststatus/teststatus.component';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers/subscribers.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  widgets = signal<Widget[]>(
    [
      {
        id: 1,
        label: 'Total Testcases',
        content: ViewsComponent,
        rows: 1,
        columns: 1,
        backgroundColor: '#003f5c',
        color: 'whitesmoke'
      },
      {
        id: 2,
        label: 'Testcase Executed',
        content: SubscribersComponent,
        rows: 1,
        columns: 1,
        backgroundColor: '#003f5c',
        color: 'whitesmoke'
      },
      {
        id: 3,
        label: 'Paased Testcases',
        content: SubscribersComponent,
        rows: 1,
        columns: 1,
        backgroundColor: '#003f5c',
        color: 'whitesmoke'
      },
      {
        id: 4,
        label: 'Paased Testcases',
        content: SubscribersComponent,
        rows: 1,
        columns: 1,
        backgroundColor: '#003f5c',
        color: 'whitesmoke'
      },
      {
        id: 5,
        label: 'Testcase ststus',
        content: TeststatusComponent,
        rows: 2,
        columns: 2,
        backgroundColor: '#003f5c',
        color: 'whitesmoke'
      }
    ]);

}

