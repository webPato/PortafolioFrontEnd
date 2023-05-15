import { TestBed } from '@angular/core/testing';

import { ConocimientoYAptitudesService } from './conocimiento-y-aptitudes.service';

describe('ConocimientoYAptitudesService', () => {
  let service: ConocimientoYAptitudesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConocimientoYAptitudesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
