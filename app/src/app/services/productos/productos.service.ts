import { Injectable } from '@angular/core';
import { Header, WEB_SERVICE } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../utils/api-response';
import {
  Caracteristica,
  CaracteristicaProps,
  Imagen,
  ImagenProps,
  Producto,
  ProductoProps,
} from './productos.service.types';
import { map, catchError } from 'rxjs';
import { handleError } from '../../utils/handleError';
import { validateAndReturnResponse } from '../../utils/validateResponse';

const headers = new HttpHeaders(Header);

const URL_BASE = `${WEB_SERVICE}productos`;

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get<ApiResponse<Producto[]>>(URL_BASE, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  getById(id: number) {
    return this.http
      .get<ApiResponse<Producto>>(`${URL_BASE}/${id}`, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  search(query: string) {
    return this.http
      .get<ApiResponse<Producto[]>>(`${URL_BASE}/search/${query}`, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  searchBySubCategoria(id: number) {
    return this.http
      .get<ApiResponse<Producto[]>>(`${URL_BASE}/search/subcategoria/${id}`, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  searchProductsWithDiscount() {
    return this.http
      .get<ApiResponse<Producto[]>>(`${URL_BASE}/search/discount/all`, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  searchProductsWithLowStock() {
    return this.http
      .get<ApiResponse<Producto[]>>(`${URL_BASE}/search/low-stock/all`, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  searchNewProducts() {
    return this.http
      .get<ApiResponse<Producto[]>>(`${URL_BASE}/search/new/all`, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  post(producto: ProductoProps) {
    return this.http
      .post<ApiResponse<Producto>>(URL_BASE, producto, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  put(id: number, producto: ProductoProps) {
    return this.http
      .put<ApiResponse<Producto>>(`${URL_BASE}/${id}`, producto, {
        headers,
      })
      .pipe(
        map(() => true),
        catchError(handleError)
      );
  }

  delete(id: number) {
    return this.http
      .delete<ApiResponse<Producto>>(`${URL_BASE}/${id}`, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  getCaracteristicas(id: number) {
    return this.http
      .get<ApiResponse<Caracteristica[]>>(`${URL_BASE}/${id}/caracteristicas`, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  postCaracteristica(id: number, caracteristica: CaracteristicaProps) {
    return this.http
      .post<ApiResponse<Caracteristica>>(
        `${URL_BASE}/${id}/caracteristicas`,
        caracteristica,
        { headers }
      )
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  putCaracteristica(
    id: number,
    idCaracteristica: number,
    caracteristica: CaracteristicaProps
  ) {
    return this.http
      .put<ApiResponse<Caracteristica>>(
        `${URL_BASE}/${id}/caracteristicas/${idCaracteristica}`,
        caracteristica,
        { headers }
      )
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  deleteCaracteristica(id: number, idCaracteristica: number) {
    return this.http
      .delete<ApiResponse<Caracteristica>>(
        `${URL_BASE}/${id}/caracteristicas/${idCaracteristica}`,
        { headers }
      )
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  getImagenes(id: number) {
    return this.http
      .get<ApiResponse<Imagen[]>>(`${URL_BASE}/${id}/imagenes`, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  postImagen(id: number, imagen: ImagenProps) {
    return this.http
      .post<ApiResponse<Imagen>>(`${URL_BASE}/${id}/imagenes`, imagen, {
        headers,
      })
      .pipe(
        map(() => {
          return true;
        }),
        catchError(handleError)
      );
  }

  deleteImagen(id: number, idImagen: number) {
    return this.http
      .delete<ApiResponse<Imagen>>(`${URL_BASE}/${id}/imagenes/${idImagen}`, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }
}
