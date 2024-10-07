import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeststatusComponent } from './teststatus.component';

describe('TeststatusComponent', () => {
  let component: TeststatusComponent;
  let fixture: ComponentFixture<TeststatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeststatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeststatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
