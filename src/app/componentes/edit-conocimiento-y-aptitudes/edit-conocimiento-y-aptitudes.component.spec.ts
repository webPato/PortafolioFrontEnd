import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConocimientoYAptitudesComponent } from './edit-conocimiento-y-aptitudes.component';

describe('EditConocimientoYAptitudesComponent', () => {
  let component: EditConocimientoYAptitudesComponent;
  let fixture: ComponentFixture<EditConocimientoYAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConocimientoYAptitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditConocimientoYAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
