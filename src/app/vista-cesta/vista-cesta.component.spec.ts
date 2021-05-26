import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCestaComponent } from './vista-cesta.component';

describe('VistaCestaComponent', () => {
  let component: VistaCestaComponent;
  let fixture: ComponentFixture<VistaCestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
