import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proy: Proyectos[] = [];
  constructor(
    private proyectosService : ProyectosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos(){    
    this.proyectosService.verProyectos().subscribe(      
      proData => {this.proy = proData}
    );
  }

  deleteProyectos(id?: number){
    if(id != undefined){
      this.proyectosService.borrarProyectos(id).subscribe(
        data => {
          alert("Proyecto eliminado correctamente")
          this.getProyectos();
        }, err =>{
          alert("Proyecto no eliminado");
        }
      )
    }
  } 

  editProyectos(id?: number){    
    this.router.navigate(['/edit-proyectos', id]);
  }

  redirectNewProyectos(){
    this.router.navigate(['/new-proyectos']);
  }

}
