import { ApiClient, ApiRequest, ApiResponse } from 'infra/adapters/api/protocols/api-client';

export class ApiClientSpy implements ApiClient {
  body?: string;
  method?: string;
  headers?: any;
  url?: string;
  params?: Record<string, string>;
  response: ApiResponse = {
    status: 200,
  };
  mockFunction?: jest.Mock;

  constructor(attrs?: { response?: ApiResponse; mockFunction?: jest.Mock }) {
    Object.assign(this, attrs);
  }

  async request(data: ApiRequest): Promise<ApiResponse<any>> {
    this.body = data.body;
    this.headers = data.headers;
    this.method = data.method;
    this.url = data.url;
    this.params = data.params;

    this.mockFunction?.();
    return this.response;
  }
}
