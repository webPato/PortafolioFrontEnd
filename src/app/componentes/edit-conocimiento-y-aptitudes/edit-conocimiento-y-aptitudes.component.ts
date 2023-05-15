import { Component, OnInit } from '@angular/core';
import { ConocimientoYAptitudes } from 'src/app/model/conocimiento-y-aptitudes';
import { ConocimientoYAptitudesService } from 'src/app/servicios/conocimiento-y-aptitudes.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-conocimiento-y-aptitudes',
  templateUrl: './edit-conocimiento-y-aptitudes.component.html',
  styleUrls: ['./edit-conocimiento-y-aptitudes.component.css']
})
export class EditConocimientoYAptitudesComponent implements OnInit { 
  aptform: FormGroup;  
  id: any;
  descripcion: any;

  constructor(
            //Inyectamos el ConocimientoYAptitudesService que hemos importado
            private conocimientoYAptitudesService : ConocimientoYAptitudesService,
            private router: Router,
            private activatedRoute: ActivatedRoute,
            private fb: FormBuilder
  ) { 
    this.aptform = this.fb.group({
      id: [''],
      descripcion: ['']    
    });
  }
  
  get Id(){return this.aptform.get("id")}
  get Descripcion(){return this.aptform.get("descripcion")}

  ngOnInit(): void { 
    this.aptform.setValue({id: parseInt(this.activatedRoute.snapshot.params['id']),
    descripcion: this.aptform.value.descripcion})    
    }

    editConocimientosAptitudes(id?: number) {
      const concyapt: ConocimientoYAptitudes = {
        id: parseInt(this.activatedRoute.snapshot.params['id']),
        descripcion: this.aptform.value.descripcion,
        id_persona: 1      
      };      
      this.conocimientoYAptitudesService.editarConAptitud(concyapt).subscribe(
        conData =>{          
          alert("Aptitud editada");                      
        }, 
        err => {          
          alert("Error al editar aptitud");
          this.router.navigate(['']);
        }
      )
    }
}
