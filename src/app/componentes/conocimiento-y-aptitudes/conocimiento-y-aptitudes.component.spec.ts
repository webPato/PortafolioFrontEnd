import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocimientoYAptitudesComponent } from './conocimiento-y-aptitudes.component';

describe('ConocimientoYAptitudesComponent', () => {
  let component: ConocimientoYAptitudesComponent;
  let fixture: ComponentFixture<ConocimientoYAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocimientoYAptitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConocimientoYAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
