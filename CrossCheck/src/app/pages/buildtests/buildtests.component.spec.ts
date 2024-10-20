import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildtestsComponent } from './buildtests.component';

describe('BuildtestsComponent', () => {
  let component: BuildtestsComponent;
  let fixture: ComponentFixture<BuildtestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildtestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
