import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from 'src/app/model/acerca-de';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  private backendURL: string = "http://localhost:8080/acercade";

  constructor(
    private httpClient: HttpClient
  ) { }

  //Methods
  public verAcercaDe(): Observable<AcercaDe[]>{  
    return this.httpClient.get<AcercaDe[]>(this.backendURL + '/ver');    
  }
  
    //PUT
  public editarAcercaDe(ac: AcercaDe): Observable<any>{
    return this.httpClient.put<any>(this.backendURL + `/edit`, ac);
  } 
   
  //DELETE
  public borrarAcercaDe(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.backendURL + `/delete/${id}`);
  }

}
