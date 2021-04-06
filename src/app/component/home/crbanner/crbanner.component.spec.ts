import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrbannerComponent } from './crbanner.component';

describe('CrbannerComponent', () => {
  let component: CrbannerComponent;
  let fixture: ComponentFixture<CrbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
