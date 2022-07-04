import axios from 'axios';

import createAuthHash from 'service/auth/create-hash/create-hash';
import { ApiClient as IApiClient, ApiRequest, ApiResponse } from './protocols/api-client';

export default class ApiClient implements IApiClient {
  async request(params: ApiRequest): Promise<ApiResponse<any>> {
    const timestamp = new Date().getTime();

    const {
      data: { data },
      headers,
      status,
    } = await axios.request({
      ...params,
      params: {
        ...params.params,
        ts: timestamp,
        apikey: process.env.REACT_APP_API_PUBLIC_KEY,
        hash: createAuthHash(timestamp),
      },
    });

    return { data, headers, status };
  }
}
