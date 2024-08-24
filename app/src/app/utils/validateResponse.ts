import { AlertaService } from '../services/alertas/alerta.service';
import { ApiResponse } from './api-response';

export const validateAndReturnResponse = <T>(
  res: ApiResponse<T>,
  options: {
    alerta: AlertaService;
    showAlert?: boolean;
    customError?: string;
  }
) => {
  const { isSuccess, message, data } = res;
  const { alerta, showAlert = true, customError = null } = options;
  if (!isSuccess) {
    // eslint-disable-next-line no-console
    console.error(message);
    if (showAlert) {
      alerta.showError(customError || message);
    }
    return null;
  }
  return data;
};
