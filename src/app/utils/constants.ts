export const JWT_LOCAL_STORAGE_KEY = 'access_token';

export const tokenLocalStorageGetter = () => localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
