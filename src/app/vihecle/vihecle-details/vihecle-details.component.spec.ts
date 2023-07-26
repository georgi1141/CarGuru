import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VihecleDetailsComponent } from './vihecle-details.component';

describe('VihecleDetailsComponent', () => {
  let component: VihecleDetailsComponent;
  let fixture: ComponentFixture<VihecleDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VihecleDetailsComponent]
    });
    fixture = TestBed.createComponent(VihecleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
