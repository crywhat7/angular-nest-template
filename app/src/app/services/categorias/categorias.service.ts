import { Injectable } from '@angular/core';
import { Header, WEB_SERVICE } from '../../config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs';
import { ApiResponse } from '../../utils/api-response';
import { handleError } from '../../utils/handleError';
import { validateAndReturnResponse } from '../../utils/validateResponse';
import { Categoria, CategoriaProps } from './categorias.service.types';

const headers = new HttpHeaders(Header);

const URL_BASE = `${WEB_SERVICE}categorias`;

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get<ApiResponse<Categoria[]>>(URL_BASE, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  getById(id: number) {
    return this.http
      .get<ApiResponse<Categoria>>(`${URL_BASE}/${id}`, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  post(data: CategoriaProps) {
    return this.http
      .post<ApiResponse<Categoria>>(URL_BASE, data, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  put(id: number, data: CategoriaProps) {
    return this.http
      .put<ApiResponse<Categoria>>(`${URL_BASE}/${id}`, data, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  delete(id: number) {
    return this.http
      .delete<ApiResponse<boolean>>(`${URL_BASE}/${id}`, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }
}
