import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestasValor } from './propuestas-valor';

describe('PropuestasValor', () => {
  let component: PropuestasValor;
  let fixture: ComponentFixture<PropuestasValor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropuestasValor],
    }).compileComponents();

    fixture = TestBed.createComponent(PropuestasValor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
