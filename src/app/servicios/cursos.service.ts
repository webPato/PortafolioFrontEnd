import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from 'src/app/model/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  //private backendURL: string = "http://localhost:8080/cursos";
  //private backendURL: string = "https://portfolio-backend-zz6z.onrender.com/cursos";
  private backendURL: string = "https://back-portfolio-ph.onrender.com/cursos";

  constructor(
    private httpClient: HttpClient
  ) { }

//Methods
public verCursos(): Observable<Cursos[]>{  
  return this.httpClient.get<Cursos[]>(this.backendURL + '/ver');    
}

public verCursosById(id: number): Observable<Cursos>{
  return this.httpClient.get<Cursos>(this.backendURL + `/ver/${id}`);
}  
 
public createCursos(cur: Cursos): Observable<any>{
    return this.httpClient.post<any>(this.backendURL + '/new', cur);
  }

  //PUT
public editarCursos(cur: Cursos): Observable<any>{
  return this.httpClient.put<any>(this.backendURL + `/edit`, cur);
}

  //PUT
 public editarCursosPorID(id: number, cur: Cursos): Observable<any>{
    return this.httpClient.put<any>(this.backendURL + `/edit/${id}`, cur);
  }

//DELETE
public borrarCursos(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.backendURL + `/delete/${id}`);
}

}
