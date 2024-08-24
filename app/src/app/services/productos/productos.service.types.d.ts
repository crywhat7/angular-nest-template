import { Marca } from '../marcas/marcas.interfaces';
import { SubCategoria } from '../subcategorias/subcategorias.service.spec';

export interface ProductoProps {
  descripcion: string;
  nombre: string;
  costo: number;
  margen: number;
  stock: number;
  inhabilitado: boolean;
  descuento: number;
  idMarca: number;
  idSubCategoria: number;
}

export interface Producto {
  id: number;
  createdAt: Date;
  descripcion: string;
  nombre: string;
  costo: number;
  margen: number;
  stock: number;
  inhabilitado: boolean;
  descuento: number;
  marca: Marca;
  subcategoria: SubCategoria;
  imagenes: Imagen[];
  caracteristicas: Caracteristica[];
}

export interface CaracteristicaProps {
  descripcion: string;
  icon: string;
}

export interface Caracteristica {
  id: number;
  icon: string;
  createdAt: Date;
  idProducto: number;
  descripcion: string;
}

export interface ImagenProps {
  base64: string;
}

export interface Imagen {
  id: number;
  url: string;
  filename: string;
  createdAt: Date;
  idProducto: number;
}
