import { Component, OnInit } from '@angular/core';
import { ConocimientoYAptitudes } from 'src/app/model/conocimiento-y-aptitudes';
import { ConocimientoYAptitudesService } from 'src/app/servicios/conocimiento-y-aptitudes.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-create-conocimiento-y-aptitudes',
  templateUrl: './create-conocimiento-y-aptitudes.component.html',
  styleUrls: ['./create-conocimiento-y-aptitudes.component.css']
})
export class CreateConocimientoYAptitudesComponent implements OnInit {
 //Cramos un nuevo usuario
 id: number = 0;
 descripcion: string = '';
 id_persona: number= 1;
 
  constructor(
     //Inyectamos el ConocimientoYAptitudesService que hemos importado
     private conocimientoYAptitudesService : ConocimientoYAptitudesService,
     private router: Router,
     private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

   //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de aptitudes
  onSubmitForm(){    
    this.commitConocimientoYAptitudes();
  }
  
  commitConocimientoYAptitudes(): void{
    const conyapt = new ConocimientoYAptitudes(this.id, this.descripcion, this.id_persona);
    this.conocimientoYAptitudesService.createConocimientosAptitudes(conyapt).subscribe(data=>{
      alert("Aptitud agregada");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
 

    //Redirección a lista de aptitudes
    redirectNewConocApti(){
      this.router.navigate(['/new-aptitudes']);
    }
 
 
}
