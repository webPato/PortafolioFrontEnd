import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-create-educacion',
  templateUrl: './create-educacion.component.html',
  styleUrls: ['./create-educacion.component.css']
})
export class CreateEducacionComponent implements OnInit {
  id: number = 0;
  titulo: string = '';
  entidad: string = '';
  duracion: string = '';
  id_persona: number= 1;
  constructor(
    private educacionService : EducacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm(){    
    this.commitEducacion();
  }

  commitEducacion(): void{
    const cur = new Educacion(this.id, this.titulo, this.entidad, this.duracion, this.id_persona);
    this.educacionService.createEducacion(cur).subscribe(data=>{
      alert("Educacion Agregado");
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    }
    )
  }

}
