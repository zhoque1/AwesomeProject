import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';

interface IApi {
  get<TRequest = any, TResponse = AxiosResponse<TRequest>>(
    url: string,
    withToken?: boolean,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;
  post<TRequest, TResponse>(
    url: string,
    data?: TRequest,
    withToken?: boolean,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;
  patch<TRequest, TResponse>(
    url: string,
    data?: TRequest,
    withToken?: boolean,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;
  put<TRequest, TResponse>(
    url: string,
    data?: TRequest,
    withToken?: boolean,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;
}

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

export type { IApi, AdaptAxiosRequestConfig };
