import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimePickerComponent } from './ng-time-picker.component';

describe('NgTimePickerComponent', () => {
  let component: NgTimePickerComponent;
  let fixture: ComponentFixture<NgTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTimePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
