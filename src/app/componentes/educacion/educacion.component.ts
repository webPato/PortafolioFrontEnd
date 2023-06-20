import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];

  constructor(
    private educacionsService : EducacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  getEducacion(){    
    this.educacionsService.verEducacion().subscribe(      
      eduData => {this.edu = eduData}
    );
  }

  deleteEducacion(id?: number){
    if(id != undefined){
      this.educacionsService.borrarEducacion(id).subscribe(
        data => {
          alert("Educacion eliminada correctamente")
          this.getEducacion();
        }, err =>{
          alert("Educacion no eliminada");
        }
      )
    }
  } 

  editEducacion(id?: number, titulo?: string, entidad?: string, duracion?: string){    
    this.router.navigate(['/edit-educacion', id, titulo, entidad, duracion]);
  }
  
  redirectNewEducacion(){
    this.router.navigate(['/new-educacion']);
  }

}
