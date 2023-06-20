import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { Direccion } from 'src/app/model/direccion';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //private backendURL: string = "http://localhost:8080/experiencia";
  //private backendURL: string = "https://portfolio-backend-zz6z.onrender.com/experiencia";
  private backendURL: string = "https://back-portfolio-ph.onrender.com/experiencia";

  constructor(
    private httpClient: HttpClient
  ) { }

    //Methods
public verExperiencia(): Observable<Experiencia[]>{  
  return this.httpClient.get<Experiencia[]>(this.backendURL + '/ver');    
}

public verExperienciaById(id: number): Observable<Experiencia>{
  return this.httpClient.get<Experiencia>(this.backendURL + `/ver/${id}`);
}  
 
public createExperiencia(exp: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.backendURL + '/new', exp);
  }

  //PUT
public editarExperiencia(exp: Experiencia): Observable<any>{
  return this.httpClient.put<any>(this.backendURL + `/edit`, exp);
}

  //PUT
 public editarExperienciaPorID(id: number, exp: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.backendURL + `/edit/${id}`, exp);
  }

//DELETE
public borrarExperiencia(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.backendURL + `/delete/${id}`);
}

public verAllDirecciones(): Observable<Direccion[]>{
  //return this.httpClient.get<Direccion[]>("http://localhost:8080/direccion/ver")
  return this.httpClient.get<Direccion[]>("https://portfolio-backend-zz6z.onrender.com/direccion/ver")
  
 }



}
