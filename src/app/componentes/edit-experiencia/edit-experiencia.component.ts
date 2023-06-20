import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { Direccion } from 'src/app/model/direccion';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expform: FormGroup;     
  id: any;
  titulo: any;
  cargo: any;
  jornada: any;
  tiempo: any;
  descripcion: any;
  id_direccion: any;
  id_persona: any;  
  listDireccion: Direccion[] = [];

  constructor(
    private experienciaService : ExperienciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.expform = this.fb.group({
      id: [''],
      titulo: [''],
      cargo: [''],
      jornada: [''],
      tiempo: [''],
      descripcion: [''],
     // id_direccion: ['']
    });
   }

   get Id(){return this.expform.get("id")}
   get Titulo(){return this.expform.get("titulo")}
   get Cargo(){return this.expform.get("cargo")}
   get Jornada(){return this.expform.get("jornada")}
   get Tiempo(){return this.expform.get("tiempo")}
   get Descripcion(){return this.expform.get("descripcion")}
   //get Direccion(){return this.expform.get("direccion")}
 
   ngOnInit(): void { 
    this.expform.setValue({
    id: parseInt(this.activatedRoute.snapshot.params['id']),
    titulo: this.activatedRoute.snapshot.params['titulo'],
    cargo: this.activatedRoute.snapshot.params['cargo'],
    jornada: this.activatedRoute.snapshot.params['jornada'],
    tiempo: this.activatedRoute.snapshot.params['tiempo'],
    descripcion: this.activatedRoute.snapshot.params['descripcion']
    //direccion: this.activatedRoute.snapshot.params['direccion']
  })    
    }
 
    editExperiencia(id?: number) {
      const exper: Experiencia = {
        id: parseInt(this.activatedRoute.snapshot.params['id']),
        titulo: this.expform.value.titulo,
        cargo: this.expform.value.cargo,
        jornada: this.expform.value.jornada,
        tiempo: this.expform.value.tiempo,
        descripcion: this.expform.value.descripcion,
        id_direccion: 1,   
        id_persona: 1      
      };      
      this.experienciaService.editarExperiencia(exper).subscribe(
        expData =>{          
          alert("Experiencia Editada");                      
          this.router.navigate(['home']);
        }, 
        err => {          
          alert("Error al editar experiencia");
          this.router.navigate(['']);
        }
      )
    }

  /*  getDirecciones(): void{
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
