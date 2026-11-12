import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ususarios } from './ususarios';

describe('Ususarios', () => {
  let component: Ususarios;
  let fixture: ComponentFixture<Ususarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ususarios],
    }).compileComponents();

    fixture = TestBed.createComponent(Ususarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
