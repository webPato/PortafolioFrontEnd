export class Educacion {
    id: number;
    titulo: string;   
    duracion: string; 
    entidad: string; 
    id_persona: number;
    
    constructor(id: number, titulo: string, duracion: string, entidad: string, id_persona: number){
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.entidad = entidad;
        this.id_persona = id_persona;
    }
}
