export interface Producto {
    idproducto?: string;
    idcategoria?: string;
    codigo: string;
    nombre: string;
    precio_venta: number;
    stock: number;
    descripcion?: string;
    estado: boolean;
}