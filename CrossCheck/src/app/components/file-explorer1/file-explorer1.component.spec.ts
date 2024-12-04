import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorer1Component } from './file-explorer1.component';

describe('FileExplorer1Component', () => {
  let component: FileExplorer1Component;
  let fixture: ComponentFixture<FileExplorer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExplorer1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileExplorer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
