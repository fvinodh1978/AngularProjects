import { computed, Injectable, signal } from '@angular/core';
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
        label: 'Passed Testcases',
        content: SubscribersComponent,
        rows: 1,
        columns: 1,
        backgroundColor: '#003f5c',
        color: 'whitesmoke'
      },
      {
        id: 4,
        label: 'Failed Testcases',
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

  addedWidgets = signal<Widget[]>(
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
        label: 'Passed Testcases',
        content: SubscribersComponent,
        rows: 1,
        columns: 1,
        backgroundColor: '#003f5c',
        color: 'whitesmoke'
      },
      {
        id: 4,
        label: 'Failed Testcases',
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
    ]
  );

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id));
  });

  addWidget(w: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }]);
  }
  constructor() { }
}


