import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlabComponent } from './testlab.component';

describe('TestlabComponent', () => {
  let component: TestlabComponent;
  let fixture: ComponentFixture<TestlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestlabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
