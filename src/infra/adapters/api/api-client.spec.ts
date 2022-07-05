import axios from 'axios';

import ApiClient from './api-client';
import { ApiRequest } from '../../../service/protocols/api/protocols/api-client';
import createAuthHash from '../../../service/auth/create-hash/create-hash';

jest.mock('axios');

describe('ApiClient', () => {
  it('should insert auth params on send request', () => {
    const apiClient = new ApiClient();

    const requestObject: ApiRequest = {
      method: 'post',
      url: '/',
      params: { param1: '1' },
      headers: { header1: '1' },
      body: {
        body: 'boyd',
      },
    };

    apiClient.request(requestObject);
    expect(axios.request).toHaveBeenCalledWith(
      expect.objectContaining({
        params: expect.objectContaining({
          ts: expect.any(Number),
          apikey: expect.any(String),
          hash: expect.any(String),
          param1: expect.any(String),
        }),
      }),
    );
  });
});
