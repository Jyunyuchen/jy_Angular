import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeRightDivAndLeftDivComponent } from './resize-right-div-and-left-div.component';

describe('ResizeRightDivAndLeftDivComponent', () => {
  let component: ResizeRightDivAndLeftDivComponent;
  let fixture: ComponentFixture<ResizeRightDivAndLeftDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeRightDivAndLeftDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResizeRightDivAndLeftDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
