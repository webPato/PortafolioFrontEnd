import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //private backendURL: string = "http://localhost:8080/persona";
  private backendURL: string = "https://portfolio-backend-zz6z.onrender.com/persona";

  constructor(
    private httpClient: HttpClient
  ) { }

  //Methods
  public verPersona(): Observable<Persona[]>{  
    return this.httpClient.get<Persona[]>(this.backendURL + '/ver');    
  }   
}
