import { environment } from '../environments/environment';

export const Header = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const WEB_SERVICE = environment.host;

export const DATA_USER_KEY = 'usuario';

export const CUSTOM_ROUTES = {
  HOME: '',
};

export const IMAGES_DOMAIN = 'https://sclhbbqnazoerbywpwrw.supabase.co';
export const STORAGE_ROUTE = 'storage/v1/object/public';
export const PROJECT_BUCKET = 'is_documents_and_files';

export const URL_BASE = `${IMAGES_DOMAIN}/${STORAGE_ROUTE}/${PROJECT_BUCKET}`;
export const IMAGES_FOLDERS = {
  productos: 'productos',
};
