export type ApiRequest = {
  url: string;
  method: 'post' | 'get' | 'put' | 'delete';
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, any>;
};

export type ApiResponse<T = any> = {
  status: number;
  data?: T;
  headers?: Record<string, string>;
};

export interface ApiClient<R = any> {
  request: (data: ApiRequest) => Promise<ApiResponse<R>>;
}

export type Pagination = {
  limit?: number;
  offset?: number;
};
