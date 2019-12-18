import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBarAngularComponent } from './rating-bar-angular.component';

describe('RatingBarAngularComponent', () => {
  let component: RatingBarAngularComponent;
  let fixture: ComponentFixture<RatingBarAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingBarAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingBarAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
