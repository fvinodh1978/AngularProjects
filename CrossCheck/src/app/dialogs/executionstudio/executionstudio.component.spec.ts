import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionstudioComponent } from './executionstudio.component';

describe('ExecutionstudioComponent', () => {
  let component: ExecutionstudioComponent;
  let fixture: ComponentFixture<ExecutionstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExecutionstudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
