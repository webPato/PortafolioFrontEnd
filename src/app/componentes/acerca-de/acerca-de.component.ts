import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 // id: number = 0;
 // descripcion: string = '';
 // id_persona: number= 1;
  acer: AcercaDe[] = [];
  
  constructor(
    private acercadeService : AcercaDeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAcercaDe();
  }

  getAcercaDe(){    
    this.acercadeService.verAcercaDe().subscribe(      
      aData => {this.acer = aData}
    );
  }
  
  deleteAcercaDe(id?: number){
    if(id != undefined){      
      this.acercadeService.borrarAcercaDe(id).subscribe(
        data => {          
          alert("Acerca De mí eliminado correctamente")
          this.getAcercaDe();
        }, err =>{
          alert("AcercaDe no eliminado");
        }
      )
    }
  } 

  editAcercaDe(id?: number, descripcion?: string){    
    this.router.navigate(['/edit-acercade/', id, descripcion]);
  }

}
