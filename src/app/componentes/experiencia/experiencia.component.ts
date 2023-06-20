import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {  
  exp: Experiencia[] = [];

  constructor(
    private experienciaService : ExperienciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getExperiencia();
  }

  getExperiencia(){    
    this.experienciaService.verExperiencia().subscribe(      
      expData => {this.exp = expData}
    );
  }

  deleteExperiencia(id?: number){
    if(id != undefined){
      this.experienciaService.borrarExperiencia(id).subscribe(
        data => {
          alert("Experiencia eliminada correctamente")
          this.getExperiencia();
        }, err =>{
          alert("Experiencia no eliminada");
        }
      )
    }
  } 

  editExperiencia(id?: number, titulo?: string, cargo?: string, jornada?: string, tiempo?: string, descripcion?: string){    
    this.router.navigate(['/edit-experiencia', id, titulo, cargo, jornada, tiempo, descripcion]);
  }

  redirectNewExperiencia(){
    this.router.navigate(['/new-experiencia']);
  }
}
