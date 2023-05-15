import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from 'src/app/model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private backendURL: string = "http://localhost:8080/proyectos";

  constructor(
    private httpClient: HttpClient
  ) { }

  //Methods
public verProyectos(): Observable<Proyectos[]>{  
  return this.httpClient.get<Proyectos[]>(this.backendURL + '/ver');    
}

public verProyectosById(id: number): Observable<Proyectos>{
  return this.httpClient.get<Proyectos>(this.backendURL + `/ver/${id}`);
}  
 
public createProyectos(pro: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.backendURL + '/new', pro);
  }

  //PUT
public editarProyectos(pro: Proyectos): Observable<any>{
  return this.httpClient.put<any>(this.backendURL + `/edit`, pro);
}

  //PUT
 public editarProyectosPorID(id: number, pro: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.backendURL + `/edit/${id}`, pro);
  }

//DELETE
public borrarProyectos(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.backendURL + `/delete/${id}`);
}
}
