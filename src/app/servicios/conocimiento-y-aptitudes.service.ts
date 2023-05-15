import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConocimientoYAptitudes } from 'src/app/model/conocimiento-y-aptitudes';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoYAptitudesService {
   //Endpoint del Backend
   private backendURL: string = "http://localhost:8080/aptitudes";

  constructor(
        //HttpClient para proporcionar métodos que reciben datos del backend
        private httpClient: HttpClient
  ) { }

  //Methods
  public verConocimientosAptitudes(): Observable<ConocimientoYAptitudes[]>{
    //return this.httpClient.get<ConocimientoYAptitudes[]>(`${this.backendURL}` + '/ver');        
    return this.httpClient.get<ConocimientoYAptitudes[]>(this.backendURL + '/ver');    
  }

  public verConocimientosAptitudesById(id: number): Observable<ConocimientoYAptitudes>{
    return this.httpClient.get<ConocimientoYAptitudes>(this.backendURL + `/ver/${id}`);
  }

    //POST
    public createConocimientosAptitudes(conyapt: ConocimientoYAptitudes): Observable<any>{
      return this.httpClient.post<any>(this.backendURL + '/new', conyapt);
    }

    //PUT
  public editarConAptitud(conyapt: ConocimientoYAptitudes): Observable<any>{
    return this.httpClient.put<any>(this.backendURL + `/edit`, conyapt);
  }

    //PUT
   public editarConAptitudPorID(id: number, concyap: ConocimientoYAptitudes): Observable<any>{
      return this.httpClient.put<any>(this.backendURL + `/edit/${id}`, concyap);
    }
 
  //DELETE
  public borrarConAptitud(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.backendURL + `/delete/${id}`);
  }

}
