import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionformComponent } from './executionform.component';

describe('ExecutionformComponent', () => {
  let component: ExecutionformComponent;
  let fixture: ComponentFixture<ExecutionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExecutionformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecutionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
