import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/servicios/cursos.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-cursos',
  templateUrl: './edit-cursos.component.html',
  styleUrls: ['./edit-cursos.component.css']
})
export class EditCursosComponent implements OnInit {
  curform: FormGroup;     
  id: any;
  titulo: any;
  entidad: any;
  fecha: any;

  constructor(
            private cursosService : CursosService,
            private router: Router,
            private activatedRoute: ActivatedRoute,
            private fb: FormBuilder
  ) {
    this.curform = this.fb.group({
      id: [''],
      titulo: [''],
      entidad: [''],
      fecha: ['']
    });
   }

   get Id(){return this.curform.get("id")}
   get Titulo(){return this.curform.get("titulo")}
   get Entidad(){return this.curform.get("entidad")}
   get Fecha(){return this.curform.get("fecha")}

   ngOnInit(): void { 
    this.curform.setValue({id: parseInt(this.activatedRoute.snapshot.params['id']),
    titulo: this.activatedRoute.snapshot.params['titulo'],
    entidad: this.activatedRoute.snapshot.params['entidad'],
    fecha: this.activatedRoute.snapshot.params['fecha']
  })    
    }

    editCursos(id?: number) {
      const curso: Cursos = {
        id: parseInt(this.activatedRoute.snapshot.params['id']),
        titulo: this.curform.value.titulo,
        entidad: this.curform.value.entidad,
        fecha: this.curform.value.fecha,
        id_persona: 1      
      };      
      this.cursosService.editarCursos(curso).subscribe(
        curData =>{          
          alert("Curso Editado");        
          this.router.navigate(['home']);              
        }, 
        err => {          
          alert("Error al editar curso");
          this.router.navigate(['']);
        }
      )
    }

}
