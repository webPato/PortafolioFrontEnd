export class AcercaDe {
    id: number;
    descripcion: string;   
     id_persona: number;
    
    constructor(id: number, descripcion: string, id_persona: number){
        this.id = id;
        this.descripcion = descripcion;       
        this.id_persona = id_persona;
    }
}
