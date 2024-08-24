import { Cliente } from '../../modules/abyss/interfaces/cliente-interface';
import { FormasPago } from '../../modules/abyss/interfaces/formasPago-interface';
import { Producto } from '../productos/productos.service.types';

export interface Factura {
  id: number;
  createdAt: Date;
  isv_15: number;
  isv_18: number;
  gravacion_15: number;
  gravacion_18: number;
  total: number;
  nula: boolean;
  cliente: Cliente;
  formaPago: FormasPago;
  detalle: DetalleFactura[];
}

export interface DetalleFactura {
  id: number;
  cantidad: number;
  producto: Producto;
  subtotal: number;
  createdAt: Date;
  descuento: number;
  idFactura: number;
  precioUnitario: number;
}

export interface FacturaProps {
  cliente: {
    id: number;
  };
  formaPago: {
    id: number;
  };
  productosFactura: DetalleFacturaProps[];
}

export interface DetalleFacturaProps {
  idProducto: number;
  cantidad: number;
  precioUnitario: number;
  descuento: number;
  subtotal: number;
}
