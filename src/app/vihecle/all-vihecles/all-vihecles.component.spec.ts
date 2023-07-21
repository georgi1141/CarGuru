import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllViheclesComponent } from './all-vihecles.component';

describe('AllViheclesComponent', () => {
  let component: AllViheclesComponent;
  let fixture: ComponentFixture<AllViheclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllViheclesComponent]
    });
    fixture = TestBed.createComponent(AllViheclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
