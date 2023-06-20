import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  pform: FormGroup;     
  id: any;
  nombre: any;
  apellido: any;
  fechaNac: any;
  tel: any;
  email: any; 

  constructor(
    private personaService : PersonaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.pform = this.fb.group({
      id: [''],
      nombre: [''],
      apellido: [''],
      fechaNac: [''],
      tel: [''],
      email: [''],      
    });
   }

   get Id(){return this.pform.get("id")}
   get Nombre(){return this.pform.get("nombre")}
   get Apellido(){return this.pform.get("apellido")}
   get FechaNac(){return this.pform.get("fechaNac")}
   get Tel(){return this.pform.get("tel")}
   get Email(){return this.pform.get("email")}   

  ngOnInit(): void {
    this.pform.setValue({id: parseInt(this.activatedRoute.snapshot.params['id']),
    nombre: this.activatedRoute.snapshot.params['nombre'],
    apellido: this.activatedRoute.snapshot.params['apellido'],
    fechaNac: this.activatedRoute.snapshot.params['fechaNac'],
    tel: this.activatedRoute.snapshot.params['tel'],
    email: this.activatedRoute.snapshot.params['email']    
  })   
  } 

  editPersona(id?: number) {
    const pers: Persona = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      nombre: this.pform.value.nombre,
      apellido: this.pform.value.apellido,
      dni: this.pform.value.dni,
      fechaNac: this.pform.value.fechaNac,      
      email: this.pform.value.email,
      tel: this.pform.value.tel,     
    };      
    this.personaService.editarPersona(pers).subscribe(
      pData =>{          
        alert("Datos Editados");                      
        this.router.navigate(['home']);
      }, 
      err => {          
        alert("Error al editar persona");
        this.router.navigate(['']);
      }
    )
  }

}
