import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatactComponent } from './conatact.component';

describe('ConatactComponent', () => {
  let component: ConatactComponent;
  let fixture: ComponentFixture<ConatactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConatactComponent]
    });
    fixture = TestBed.createComponent(ConatactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
