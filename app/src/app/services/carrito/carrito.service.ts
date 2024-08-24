import { Injectable } from '@angular/core';
import { ItemCarrito } from './carrito.service.types';
import { CART_KEY } from '../../config/config';
import { Producto } from '../productos/productos.service.types';
import { BehaviorSubject } from 'rxjs';
import { AlertaService } from '../alertas/alerta.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  constructor(private alerta: AlertaService) {}

  count$ = new BehaviorSubject<number>(this.getCountCart());
  carrito$ = new BehaviorSubject<ItemCarrito[]>(this.getCarrito());

  patchCount() {
    this.count$.next(this.getCountCart());
  }

  patchCarrito() {
    this.carrito$.next(this.getCarrito());
  }

  getCarrito() {
    const carrito: ItemCarrito[] = JSON.parse(
      localStorage.getItem(CART_KEY) || '[]'
    );
    return carrito;
  }

  setCarrito(carrito: ItemCarrito[]) {
    localStorage.setItem(CART_KEY, JSON.stringify(carrito));
    this.patchCount();
    this.patchCarrito();
  }

  addToCart(producto: Producto) {
    if (producto.stock < 1) {
      this.alerta.showWarn(
        'No hay stock disponible para este producto, intentalo de nuevo más tarde 😔'
      );
      return;
    }

    const carrito = this.getCarrito();
    const index = carrito.findIndex((i) => i.producto.id === producto.id);

    if (index !== -1) {
      const cantidadActual = carrito[index].cantidad;
      const nuevaCantidad = cantidadActual + 1;

      if (nuevaCantidad > producto.stock) {
        this.alerta.showWarn(
          'Ya ha alcanzado el stock disponible para este producto 😔'
        );
        return;
      }

      if (producto.stock > 1 && producto.stock < 5) {
        this.alerta.showInfo(
          'Quedan pocas unidades de este producto, añadelo al carrito antes de que se agote'
        );
      }

      carrito[index].cantidad = nuevaCantidad;
    } else {
      carrito.push({
        producto,
        cantidad: 1,
        precio: this.getPrecioFromProduct(producto),
      });
    }

    this.setCarrito(carrito);
  }

  removeFromCart(producto: Producto) {
    const carrito = this.getCarrito();
    const index = carrito.findIndex((i) => i.producto.id === producto.id);
    if (index !== -1) {
      carrito.splice(index, 1);
    }
    this.setCarrito(carrito);
  }

  removeOneFromCart(producto: Producto) {
    const carrito = this.getCarrito();
    const index = carrito.findIndex((i) => i.producto.id === producto.id);
    if (index !== -1) {
      const cantidadActual = carrito[index].cantidad;
      const nuevaCantidad = cantidadActual - 1;
      if (nuevaCantidad < 1) {
        carrito.splice(index, 1);
      } else {
        carrito[index].cantidad = nuevaCantidad;
      }
    }
    this.setCarrito(carrito);
  }

  clearCart() {
    localStorage.removeItem(CART_KEY);
    this.setCarrito([]);
  }

  getCountCart() {
    const carrito = this.getCarrito();
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }

  getPrecioFromProduct(producto: Producto, original = false) {
    const { costo, margen, descuento } = producto;
    const precioOriginal = costo * (1 + margen / 100);
    const precioDescuento = precioOriginal * (1 - descuento / 100);
    return original ? precioOriginal : precioDescuento;
  }
}
