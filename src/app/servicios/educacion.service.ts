import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //private backendURL: string = "http://localhost:8080/educacion";
  private backendURL: string = "https://portfolio-backend-zz6z.onrender.com/educacion";

  constructor(
    private httpClient: HttpClient
  ) { }

  //Methods
public verEducacion(): Observable<Educacion[]>{  
  return this.httpClient.get<Educacion[]>(this.backendURL + '/ver');    
}

public verEducacionById(id: number): Observable<Educacion>{
  return this.httpClient.get<Educacion>(this.backendURL + `/ver/${id}`);
}  
 
public createEducacion(edu: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.backendURL + '/new', edu);
  }

  //PUT
public editarEducacion(edu: Educacion): Observable<any>{
  return this.httpClient.put<any>(this.backendURL + `/edit`, edu);
}

  //PUT
 public editarEducacionPorID(id: number, edu: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.backendURL + `/edit/${id}`, edu);
  }

//DELETE
public borrarEducacion(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.backendURL + `/delete/${id}`);
}
}
