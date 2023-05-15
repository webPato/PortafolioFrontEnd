import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/servicios/cursos.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cur: Cursos[] = [];

  constructor(
    private cursosService : CursosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(){    
    this.cursosService.verCursos().subscribe(      
      curData => {this.cur = curData}
    );
  }

  deleteCursos(id?: number){
    if(id != undefined){
      this.cursosService.borrarCursos(id).subscribe(
        data => {
          alert("Curso eliminado correctamente")
          this.getCursos();
        }, err =>{
          alert("Curso no eliminada");
        }
      )
    }
  } 

  editCursos(id?: number){    
    this.router.navigate(['/edit-cursos', id]);
  }

  redirectNewCursos(){
    this.router.navigate(['/new-cursos']);
  }

}
