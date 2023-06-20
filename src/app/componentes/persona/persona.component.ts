import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  per: Persona[] = [];
  constructor(
    private personaService : PersonaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona(){    
    this.personaService.verPersona().subscribe(      
      pData => {this.per = pData}
    );
  }

  editPersona(id?: number, nombre?: string, apellido?: string, fechaNac?: string, tel?: number, email?: string){    
    this.router.navigate(['/edit-persona', id, nombre, apellido, fechaNac, tel, email]);
  }  

  

}
