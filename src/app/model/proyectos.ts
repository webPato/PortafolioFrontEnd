export class Proyectos {
    id: number;
    titulo: string;   
    descripcion: string; 
    fecha: string; 
    link: string; 
    id_persona: number;
    
    constructor(id: number, titulo: string, descripcion: string, fecha: string, link: string, id_persona: number){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.link = link;
        this.id_persona = id_persona;
    }
}
