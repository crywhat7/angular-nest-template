import { EMPTY } from 'rxjs';
import { AlertaService } from '../services/alertas/alerta.service';

export const handleError = (
  error: unknown,
  options: {
    alerta: AlertaService;
    showAlert?: boolean;
    customError?: string;
  }
) => {
  // eslint-disable-next-line no-console
  console.error(error);
  const { alerta, showAlert = true, customError = null } = options;
  if (showAlert) {
    alerta.showError(
      customError ||
        'Ocurrió un error inesperado, revise su conexión a internet'
    );
  }

  return EMPTY;
};
