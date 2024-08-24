import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header, WEB_SERVICE } from '../../config/config';
import {
  Cliente,
  ClienteProps,
} from '../../modules/abyss/interfaces/cliente-interface';
import { ApiResponse } from '../../utils/api-response';
import { validateAndReturnResponse } from '../../utils/validateResponse';
import { catchError, map } from 'rxjs/operators';
import { handleError } from '../../utils/handleError';

const headers = new HttpHeaders(Header);

const URL_BASE = `${WEB_SERVICE}clientes`;
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}
  searchByDNI(dni: string) {
    return this.http
      .get<ApiResponse<Cliente>>(`${URL_BASE}/${dni}/dni`, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  get() {
    return this.http
      .get<ApiResponse<Cliente[]>>(URL_BASE, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  post(data: ClienteProps) {
    return this.http
      .post<ApiResponse<Cliente>>(URL_BASE, data, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  put(id: number, data: ClienteProps) {
    return this.http
      .put<ApiResponse<ClienteProps>>(`${URL_BASE}/${id}`, data, {
        headers,
      })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }
}
