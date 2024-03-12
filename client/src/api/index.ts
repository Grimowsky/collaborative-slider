import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';
export const httpClient = createAlova({
  statesHook: ReactHook,
  requestAdapter: GlobalFetch(),
  baseURL: 'http://localhost:8080/api/v1',
  responded: (response) => response.json(),
});
