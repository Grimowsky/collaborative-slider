import { httpClient } from '../index';

export const refreshToken = (token: { refreshToken?: string }) => {
  const method = httpClient.Post<{ token: string; refreshToken: string }>(
    '/auth/refresh-token',
    token,
  );
  method.meta = {
    refreshToken: true,
  };
  return method;
};
