import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs';
import { WEB_SERVICE } from '../../../../config/config';
import { AlertaService } from '../../../../services/alertas/alerta.service';
import { handleError } from '../../../../utils/handleError';
import { ApiResponse } from '../../../../utils/api-response';
import { validateAndReturnResponse } from '../../../../utils/validateResponse';
import { Example, ExampleProps } from './example.service.types';

const URL_BASE = `${WEB_SERVICE}`;

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private http: HttpClient, private alerta: AlertaService) {}

  get() {
    return this.http.get<ApiResponse<Example>>(URL_BASE).pipe(
      map((res) =>
        validateAndReturnResponse(res, {
          alerta: this.alerta,
        })
      ),
      catchError((err) => handleError(err, { alerta: this.alerta }))
    );
  }

  post(props: ExampleProps) {
    return this.http.post<ApiResponse<Example>>(URL_BASE, props).pipe(
      map((res) =>
        validateAndReturnResponse(res, {
          alerta: this.alerta,
        })
      ),
      catchError((err) => handleError(err, { alerta: this.alerta }))
    );
  }

  put(id: string, props: ExampleProps) {
    return this.http.put<ApiResponse<Example>>(`${URL_BASE}/${id}`, props).pipe(
      map((res) =>
        validateAndReturnResponse(res, {
          alerta: this.alerta,
        })
      ),
      catchError((err) => handleError(err, { alerta: this.alerta }))
    );
  }

  delete(id: string) {
    return this.http.delete<ApiResponse<boolean>>(`${URL_BASE}/${id}`).pipe(
      map((res) =>
        validateAndReturnResponse(res, {
          alerta: this.alerta,
        })
      ),
      catchError((err) => handleError(err, { alerta: this.alerta }))
    );
  }
}
