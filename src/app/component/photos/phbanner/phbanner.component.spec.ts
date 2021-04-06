import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhbannerComponent } from './phbanner.component';

describe('PhbannerComponent', () => {
  let component: PhbannerComponent;
  let fixture: ComponentFixture<PhbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
