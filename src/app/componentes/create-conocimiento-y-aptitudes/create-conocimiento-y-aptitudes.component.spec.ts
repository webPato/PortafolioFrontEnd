import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConocimientoYAptitudesComponent } from './create-conocimiento-y-aptitudes.component';

describe('CreateConocimientoYAptitudesComponent', () => {
  let component: CreateConocimientoYAptitudesComponent;
  let fixture: ComponentFixture<CreateConocimientoYAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConocimientoYAptitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateConocimientoYAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
