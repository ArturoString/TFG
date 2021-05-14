import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulocComponent } from './articuloc.component';

describe('ArticulocComponent', () => {
  let component: ArticulocComponent;
  let fixture: ComponentFixture<ArticulocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
