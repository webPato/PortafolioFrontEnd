export class Experiencia {
    id: number;
    titulo: string;   
    cargo: string;
    jornada: string; 
    tiempo: string;
    descripcion: string; 
    id_direccion: number;
    id_persona: number;
    
    constructor(id: number, titulo: string, cargo: string, jornada: string, tiempo: string, descripcion: string, id_direccion: number, id_persona: number){
        this.id = id;
        this.titulo = titulo;
        this.cargo = cargo;
        this.jornada = jornada;
        this.tiempo = tiempo;
        this.descripcion = descripcion;
        this.id_direccion = id_direccion;
        this.id_persona = id_persona;
    }
}
0