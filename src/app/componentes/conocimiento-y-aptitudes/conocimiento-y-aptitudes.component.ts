import { Component, OnInit } from '@angular/core';
import { ConocimientoYAptitudes } from 'src/app/model/conocimiento-y-aptitudes';
import { ConocimientoYAptitudesService } from 'src/app/servicios/conocimiento-y-aptitudes.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-conocimiento-y-aptitudes',
  templateUrl: './conocimiento-y-aptitudes.component.html',
  styleUrls: ['./conocimiento-y-aptitudes.component.css']
})
export class ConocimientoYAptitudesComponent implements OnInit {
  conocApti: ConocimientoYAptitudes[] = [];
  
  constructor(
        //Inyectamos el ConocimientoYAptitudesService que hemos importado
        private conocimientoYAptitudesService : ConocimientoYAptitudesService,
        private router: Router,
        private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getConocimientosAptitudes();
  }

  getConocimientosAptitudes(){
    //Utilizamos el servicio inyectado para encontrar todos los conoc y aptitudes
    this.conocimientoYAptitudesService.verConocimientosAptitudes().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      conyaptData => {this.conocApti = conyaptData}
    );
  }

     //Redirección a lista de aptitudes
     redirectNewConocApti(){
      this.router.navigate(['/new-aptitudes']);
    }

    deleteConocimientosAptitudes(id?: number){
      if(id != undefined){
        this.conocimientoYAptitudesService.borrarConAptitud(id).subscribe(
          data => {
            alert("Aptitud eliminada correctamente")
            this.getConocimientosAptitudes();
          }, err =>{
            alert("Aptitud no eliminada");
          }
        )
      }
    } 

    EditConocApti(id?: number, descripcion?: string){
      //Lo envía a través de app-routing.module.ts
      this.router.navigate(['/edit-aptitudes', id, descripcion]);
    }
   


}

