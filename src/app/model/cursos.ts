export class Cursos {
    id: number;
    titulo: string;   
    entidad: string; 
    fecha: string; 
    id_persona: number;
    
    constructor(id: number, titulo: string, entidad: string, fecha: string, id_persona: number){
        this.id = id;
        this.titulo = titulo;
        this.entidad = entidad;
        this.fecha = fecha;
        this.id_persona = id_persona;
    }
}
