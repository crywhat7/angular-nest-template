import { Injectable } from '@angular/core';
import { Header, WEB_SERVICE } from '../../config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs';
import { ApiResponse } from '../../utils/api-response';
import { handleError } from '../../utils/handleError';
import { validateAndReturnResponse } from '../../utils/validateResponse';
import { Factura, FacturaProps } from './facturas.service.types';

const headers = new HttpHeaders(Header);

const URL_BASE = `${WEB_SERVICE}facturas`;

@Injectable({
  providedIn: 'root',
})
export class FacturasService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get<ApiResponse<Factura[]>>(URL_BASE, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  getById(id: number) {
    return this.http
      .get<ApiResponse<Factura>>(`${URL_BASE}/${id}`, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  post(data: FacturaProps) {
    return this.http
      .post<ApiResponse<Factura>>(URL_BASE, data, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }

  anular(id: number) {
    return this.http
      .patch<ApiResponse<boolean>>(`${URL_BASE}/${id}/anular`, {}, { headers })
      .pipe(map(validateAndReturnResponse), catchError(handleError));
  }
}
