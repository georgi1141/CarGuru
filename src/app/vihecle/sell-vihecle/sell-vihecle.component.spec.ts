import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellVihecleComponent } from './sell-vihecle.component';

describe('SellVihecleComponent', () => {
  let component: SellVihecleComponent;
  let fixture: ComponentFixture<SellVihecleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellVihecleComponent]
    });
    fixture = TestBed.createComponent(SellVihecleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
