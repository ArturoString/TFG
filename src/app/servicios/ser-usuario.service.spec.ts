import { TestBed } from '@angular/core/testing';

import { SerUsuarioService } from './ser-usuario.service';

describe('SerUsuarioService', () => {
  let service: SerUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
