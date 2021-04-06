import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChbannerComponent } from './chbanner.component';

describe('ChbannerComponent', () => {
  let component: ChbannerComponent;
  let fixture: ComponentFixture<ChbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
