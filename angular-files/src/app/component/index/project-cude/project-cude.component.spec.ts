import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCudeComponent } from './project-cude.component';

describe('ProjectCudeComponent', () => {
  let component: ProjectCudeComponent;
  let fixture: ComponentFixture<ProjectCudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
