import { TestBed } from '@angular/core/testing';

import { ServicioGraficasService } from './servicio-graficas.service';

describe('ServicioGraficasService', () => {
  let service: ServicioGraficasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioGraficasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
