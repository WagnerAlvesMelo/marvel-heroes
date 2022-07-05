import { ApiClient, ApiRequest, ApiResponse } from 'infra/adapters/api/protocols/api-client';
import ApiClientImplementation from 'infra/adapters/api/api-client';

class PrepareApiClientRequest implements ApiClient {
  constructor(private readonly apiClient: ApiClient) {}

  request(data: ApiRequest): Promise<ApiResponse> {
    return this.apiClient.request({ ...data, url: process.env.REACT_APP_API_URI + data.url });
  }
}

export default function makeApiClient() {
  const implementation = new ApiClientImplementation();
  return new PrepareApiClientRequest(implementation);
}
