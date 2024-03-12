import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';
import { refreshToken as refreshTokenMethod } from './methods/refreshToken';
import Cookies from 'js-cookie';
import { AUTH_KEY_MAPPINGS } from '../utils/keyMappings';

const BASE_URL = 'http://localhost:8080/api/v1';
export const httpClient = createAlova({
  statesHook: ReactHook,
  requestAdapter: GlobalFetch(),
  baseURL: BASE_URL,
  responded: (response) => response.json(),
});

const token = Cookies.get(AUTH_KEY_MAPPINGS.AUTH_TOKEN);
const refreshToken = Cookies.get(AUTH_KEY_MAPPINGS.REFRESH_TOKEN);

let tokenRefreshing = false; // Refreshing token, let other requests wait first
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const waitingList = [];

export const authHttpClient = createAlova({
  requestAdapter: GlobalFetch(),
  statesHook: ReactHook,
  baseURL: BASE_URL,
  beforeRequest: async ({ config, meta }) => {
    if (tokenRefreshing && meta?.authType !== 'refreshToken') {
      await new Promise((resolve) => waitingList.push(resolve));
    }
    config.headers.Authorization = `Bearer ${token}`;
  },
  responded: async (response, method) => {
    if (response.status === 401) {
      try {
        if (tokenRefreshing) {
          await new Promise((resolve) => waitingList.push(resolve));
        }
        tokenRefreshing = true;
        const res = await refreshTokenMethod({ refreshToken: refreshToken });
        Cookies.set(AUTH_KEY_MAPPINGS.AUTH_TOKEN, res.token);
        Cookies.set(AUTH_KEY_MAPPINGS.REFRESH_TOKEN, res.refreshToken);
        tokenRefreshing = false;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        waitingList.forEach((resolve) => resolve());
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        waitingList.length = [];
        // This is because the original interface is re-requested, and superposition with the previous request will result in repeated calls to transformData, so transformData needs to be left empty to remove one call.
        const methodTransformData = method.config.transformData;
        method.config.transformData = undefined;
        const dataResent = await method;
        method.config.transformData = methodTransformData;
        return dataResent;
      } catch (e) {
        console.error(e);
      }
    }
  },
});
