import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  eduform: FormGroup;     
  id: any;
  titulo: any;
  entidad: any;
  duracion: any;

  constructor(
    private educacionService : EducacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { 
    this.eduform = this.fb.group({
      id: [''],
      titulo: [''],
      entidad: [''],
      duracion: ['']
    });
  }

  get Id(){return this.eduform.get("id")}
  get Titulo(){return this.eduform.get("titulo")}
  get Entidad(){return this.eduform.get("entidad")}
  get Fecha(){return this.eduform.get("fecha")}

  ngOnInit(): void { 
   this.eduform.setValue({id: parseInt(this.activatedRoute.snapshot.params['id']),
   titulo: this.activatedRoute.snapshot.params['titulo'],
   entidad: this.activatedRoute.snapshot.params['entidad'],
   duracion: this.activatedRoute.snapshot.params['duracion'] 
 })    
   }

   editEducacion(id?: number) {
     const educacion: Educacion = {
       id: parseInt(this.activatedRoute.snapshot.params['id']),
       titulo: this.eduform.value.titulo,
       entidad: this.eduform.value.entidad,
       duracion: this.eduform.value.duracion,
       id_persona: 1      
     };      
     this.educacionService.editarEducacion(educacion).subscribe(
       eduData =>{          
         alert("Educación Editada");                      
         this.router.navigate(['home']);
       }, 
       err => {          
         alert("Error al editar educacion");
         this.router.navigate(['']);
       }
     )
   }


}
