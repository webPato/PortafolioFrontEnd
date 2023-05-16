export class Persona {
    id: number;
    nombre: string;   
    apellido: string;
    dni: number; 
    fechaNac: string;
    email: string; 
    tel: number;
    
    
    constructor(id: number, nombre: string, apellido: string, dni: number, fechaNac: string, email: string, tel: number){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNac = fechaNac;
        this.email = email;
        this.tel = tel;        
    }
}
