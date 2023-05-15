import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-create-proyectos',
  templateUrl: './create-proyectos.component.html',
  styleUrls: ['./create-proyectos.component.css']
})
export class CreateProyectosComponent implements OnInit {
  id: number = 0;
  titulo: string = '';
  descripcion: string = '';  
  fecha: string = '';
  link: string = '';
  id_persona: number= 1;

  constructor(
    private proyectosService : ProyectosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm(){    
    this.commitProyectos();
  }

  commitProyectos(): void{
    const cur = new Proyectos(this.id, this.titulo, this.descripcion, this.fecha, this.link, this.id_persona);
    this.proyectosService.createProyectos(cur).subscribe(data=>{
      alert("Proyecto Agregado");
      this.router.navigate(['']);
    }, err =>{
      alert("Error");
      this.router.navigate(['']);
    }
    )
  }

}
