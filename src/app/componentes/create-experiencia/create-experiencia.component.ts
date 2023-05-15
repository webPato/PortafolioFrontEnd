import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Direccion } from 'src/app/model/direccion';

@Component({
  selector: 'app-create-experiencia',
  templateUrl: './create-experiencia.component.html',
  styleUrls: ['./create-experiencia.component.css']
})
export class CreateExperienciaComponent implements OnInit {
  id: number = 0;
  titulo: string = '';
  cargo: string = '';
  jornada: string = '';
  tiempo: string = '';
  descripcion: string = '';
  id_persona: number= 1;
  id_direccion: number= 1;  
  listDireccion: Direccion[] = [];

  constructor(
    private experienciaService : ExperienciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm(){    
    this.commitExperiencia();
  }

  commitExperiencia(): void{
    const exp = new Experiencia(this.id, this.titulo, this.cargo, this.jornada, this.tiempo, this.descripcion, this.id_direccion, this.id_persona);
    this.experienciaService.createExperiencia(exp).subscribe(data=>{
      alert("Experiencia Agregado");
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    }
    )
  }

 /* getDirecciones(): void{
  this.experienciaService.verAllDirecciones().subscribe(resp => {
    this.listDireccion = resp;
    console.log(resp);
  }, 
   error => { console.error(error) }
  )
  }*/

  getDirecciones(){    
    this.experienciaService.verAllDirecciones().subscribe(      
      dirData => {this.listDireccion = dirData}
    );
  }

}
