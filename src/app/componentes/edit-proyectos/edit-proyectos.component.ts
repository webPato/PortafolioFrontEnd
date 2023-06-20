import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proform: FormGroup;  
  id: any;
  titulo: any;
  descripcion: any;
  fecha: any;
  link: any;
  constructor(
    private proyectosService : ProyectosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { 
    this.proform = this.fb.group({
      id: [''],
      titulo: [''],
      descripcion: [''],
      fecha: [''],
      link: ['']
    });
  }

  get Id(){return this.proform.get("id")}
  get Titulo(){return this.proform.get("titulo")}
  get Descripcion(){return this.proform.get("descripcion")}
  get Fecha(){return this.proform.get("fecha")}
  get Link(){return this.proform.get("link")}

  ngOnInit(): void { 
   this.proform.setValue({id: parseInt(this.activatedRoute.snapshot.params['id']),
   titulo: this.activatedRoute.snapshot.params['titulo'],
   descripcion: this.activatedRoute.snapshot.params['descripcion'],
   fecha: this.activatedRoute.snapshot.params['fecha'],
   link: this.activatedRoute.snapshot.params['link']   
 })    
   }

   editProyectos(id?: number) {
     const proyectos: Proyectos = {
       id: parseInt(this.activatedRoute.snapshot.params['id']),
       titulo: this.proform.value.titulo,
       descripcion: this.proform.value.descripcion,
       fecha: this.proform.value.fecha,
       link: this.proform.value.link,
       id_persona: 1      
     };      
     this.proyectosService.editarProyectos(proyectos).subscribe(
       proData =>{          
         alert("Proyecto Editado");
         this.router.navigate(['home']);               
       }, 
       err => {          
         alert("Error al editar proyecto");
         this.router.navigate(['']);
       }
     )
   }

}
