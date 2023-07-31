import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVihecleComponent } from './edit-vihecle.component';

describe('EditVihecleComponent', () => {
  let component: EditVihecleComponent;
  let fixture: ComponentFixture<EditVihecleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVihecleComponent]
    });
    fixture = TestBed.createComponent(EditVihecleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
