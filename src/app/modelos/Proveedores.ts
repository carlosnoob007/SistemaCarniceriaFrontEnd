export class Proveedores {

    id: number;
    nombreProveedor: string;
    direccion: string;
    telefono: string;
    correoElectronico: string;

    constructor(id: number, nombreProveedor: string, direccion: string, telefono: string, correoElectronico: string) {
        
        this.id = id;
        this.nombreProveedor = nombreProveedor;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correoElectronico = correoElectronico;      
    }
}