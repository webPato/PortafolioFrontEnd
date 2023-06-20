import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  acform: FormGroup;     
  id: any;
  descripcion: any; 

  constructor(
    private acercaDeService : AcercaDeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { 
    this.acform = this.fb.group({
      id: [''],
      descripcion: ['']   
    });
  }

  get Id(){return this.acform.get("id")}
  get Descripcion(){return this.acform.get("descripcion")}
 

  ngOnInit(): void { 
   this.acform.setValue({
    id: parseInt(this.activatedRoute.snapshot.params['id']),
   descripcion: this.activatedRoute.snapshot.params['descripcion']
 })    
   }

   editAcercaDe(id?: number) {
     const acerca_de: AcercaDe = {
       id: parseInt(this.activatedRoute.snapshot.params['id']),
       descripcion: this.acform.value.descripcion,    
       id_persona: 1      
     };      
     this.acercaDeService.editarAcercaDe(acerca_de).subscribe(
       acData =>{          
         alert("Acerca De mí Editado");          
         this.router.navigate(['home']);            
       }, 
       err => {          
         alert("Error al editar AcercaDe");
         this.router.navigate(['']);
       }
     )
   }

}
