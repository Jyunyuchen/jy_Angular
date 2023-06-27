import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismCellRendererComponent } from './polymorphism-cell-renderer.component';

describe('PolymorphismCellRendererComponent', () => {
  let component: PolymorphismCellRendererComponent;
  let fixture: ComponentFixture<PolymorphismCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolymorphismCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
