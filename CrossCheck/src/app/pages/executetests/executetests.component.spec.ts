import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutetestsComponent } from './executetests.component';

describe('ExecutetestsComponent', () => {
  let component: ExecutetestsComponent;
  let fixture: ComponentFixture<ExecutetestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExecutetestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutetestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
