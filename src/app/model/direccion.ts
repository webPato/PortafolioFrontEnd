export class Direccion {
    id: number;
    calle: string;   
    numero: number; 
    piso: number; 
    dpto: string;  
    id_localidad: number;
    
    constructor(id: number, calle: string, numero: number, piso: number, dpto: string, id_localidad: number){
        this.id = id;
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.dpto = dpto;
        this.id_localidad = id_localidad;
    }
}


