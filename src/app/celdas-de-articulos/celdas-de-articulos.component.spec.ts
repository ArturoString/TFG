import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeldasDeArticulosComponent } from './celdas-de-articulos.component';

describe('CeldasDeArticulosComponent', () => {
  let component: CeldasDeArticulosComponent;
  let fixture: ComponentFixture<CeldasDeArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeldasDeArticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeldasDeArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
