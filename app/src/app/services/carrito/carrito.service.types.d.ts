import { Producto } from '../productos/productos.service.types';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
  precio: number;
}
