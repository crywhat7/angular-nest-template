import { Categoria } from '../categorias/categorias.service.types';

export interface SubCategoriaProps {
  descripcion: string;
  codigo: string;
}

export interface SubCategoria {
  id: number;
  codigo: string;
  categoria: Categoria;
  createdAt: Date;
  descripcion: string;
}
