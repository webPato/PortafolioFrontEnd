import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/servicios/cursos.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-create-cursos',
  templateUrl: './create-cursos.component.html',
  styleUrls: ['./create-cursos.component.css']
})
export class CreateCursosComponent implements OnInit {
  id: number = 0;
  titulo: string = '';
  entidad: string = '';
  fecha: string = '';
  id_persona: number= 1;

  constructor(
    private cursosService : CursosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm(){    
    this.commitCursos();
  }

  commitCursos(): void{
    const cur = new Cursos(this.id, this.titulo, this.entidad, this.fecha, this.id_persona);
    this.cursosService.createCursos(cur).subscribe(data=>{
      alert("Curso Agregado");
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    }
    )
  }

}
