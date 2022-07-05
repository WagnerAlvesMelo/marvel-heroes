import axios from 'axios';

import createAuthHash from 'service/auth/create-hash/create-hash';
import {
  ApiClient as IApiClient,
  ApiRequest,
  ApiResponse,
} from 'service/protocols/api/protocols/api-client';

export default class ApiClient implements IApiClient {
  async request(params: ApiRequest): Promise<ApiResponse> {
    const timestamp = new Date().getTime();

    const response = await axios.request({
      ...params,
      params: {
        ...params.params,
        ts: timestamp,
        apikey: process.env.REACT_APP_API_PUBLIC_KEY,
        hash: createAuthHash(timestamp),
      },
    });

    return { data: response?.data.data, headers: response?.headers, status: response?.status };
  }
}
