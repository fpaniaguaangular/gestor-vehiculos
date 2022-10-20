export class ClaseSinUso {
    private id:number|any;
    private nombre:string|any;
    constructor(id:number);
    constructor(id:number, nombre:string);
    constructor(id:number, nombre:string, edad:number);
    constructor(id:number, nombre?:string, edad?:number){
        this.id=id;
        this.nombre=nombre;
    }
}

function instanciar() {
    let objeto = new ClaseSinUso(10);
}
