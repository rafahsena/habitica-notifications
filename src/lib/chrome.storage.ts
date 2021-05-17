const API_KEY_STORAGE_KEY = 'apiKey';
const API_USER_STORAGE_KEY = 'apiUser';

export const getUserInfo = (onSuccess: (item: any) => any) =>
  chrome.storage.local.get(
    [API_USER_STORAGE_KEY, API_KEY_STORAGE_KEY],
    onSuccess
  );
export const setUserInfo = (apiKey: string, apiUser: string) =>
  chrome.storage.local.set({
    [API_USER_STORAGE_KEY]: apiUser,
    [API_KEY_STORAGE_KEY]: apiKey,
  });
