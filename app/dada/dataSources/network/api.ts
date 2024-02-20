import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import * as AxiosLogger from 'axios-logger';
import Config from 'react-native-config';
import { AdaptAxiosRequestConfig, IApi } from './api.interface';
import StatusCode from './status-code';
import ApiError from './api-error';

const defaultHeaders: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  //"Access-Control-Allow-Credentials": true,
  // "X-Requested-With": "XMLHttpRequest",
};

const Api = (): IApi => {
  let _httpTokenInstance: AxiosInstance | null = null;

  const _getLocalAccessToken = async () => {
    var credentials = await { accessToken: 'Hello' }; // getAuthState()
    const token = credentials?.accessToken;
    console.log('token:' + token);
    return token;
  };

  const http = (withToken: boolean = false): AxiosInstance => {
    if (withToken) {
      return _httpTokenInstance != null ? _httpTokenInstance : initHttp(true);
    }
    return axios;
  };

  const initHttp = (withToken: boolean): AxiosInstance => {

    const instance: AxiosInstance = axios.create({
      baseURL: '', //Config.baseUrl,
      headers: defaultHeaders,
      validateStatus: function (status) {
        // Only resolve this promise if the status falls into one of these codes
        return (
          status === StatusCode.Success ||
          status === StatusCode.Created ||
          status === StatusCode.NoContent
        );
      },
    });

    instance.interceptors.request.use(
      (config): AdaptAxiosRequestConfig => {
        return Config.apiLog
          ? (AxiosLogger.requestLogger(config) as AdaptAxiosRequestConfig)
          : config;
      },
      (error): any => {
        const requestError = new ApiError(
          'Request Error',
          error.message,
          error.status,
        );
        return Promise.reject(requestError);
      },
    );

    instance.interceptors.request.use(
      // res => {
      // return AxiosLogger.requestLogger(res);
      // },
      async config => {
        const token = await _getLocalAccessToken();
        console.log('token XXXXX=' + token);
        if (token) {
          config.headers!.Authorization = 'Bearer ' + token;
        }
        return config;
      },
    );

    instance.interceptors.response.use(res => {
      return Config.apiLog ? AxiosLogger.responseLogger(res) : res;
    });

    instance.interceptors.response.use(
      response => response,
      error => {
        if (axios.isAxiosError(error)) {
          const err = error as AxiosError;
          // May handle the Axios error differently once I know the API better
          return _handleError(err.status, err.message);
        }
        return _handleError(error.status, error.message);
      },
    );

    const _handleError = (status: number | undefined, message: string) => {
      const statusCode = status ? status : 0;

      switch (statusCode) {
        case StatusCode.NoContent: {
          // Handle No Content
          return Promise.resolve(null);
        }
        case StatusCode.InternalServerError: {
          // Handle InternalServerError
          break;
        }
        case StatusCode.Forbidden: {
          // Handle Forbidden
          break;
        }
        case StatusCode.Unauthorized: {
          // Handle Unauthorized
          break;
        }
        case StatusCode.TooManyRequests: {
          // Handle TooManyRequests
          break;
        }
      }

      const responseError = new ApiError('Response Error', message, statusCode);
      return Promise.reject(responseError);
    };

    _httpTokenInstance = instance;

    return _httpTokenInstance;
  };

  /**
   *
   * @param url
   * @param withToken
   * @param config
   * @returns {{TRequest = The Request Object that is sent to the server, TResponse = The Response object }}
   * How to test -- Create an object and cast it as an AxiosResponse (return {} as TResponse;)
   */
  const get = <TRequest = any, TResponse = AxiosResponse<TRequest>>(
    url: string,
    withToken?: boolean,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    return http(withToken).get<TRequest, TResponse>(url, config);
  };

  const post = <TRequest = any, TResponse = AxiosResponse<TRequest>>(
    url: string,
    data?: TRequest,
    withToken?: boolean,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    return http(withToken).post<TRequest, TResponse>(url, data, config);
  };

  const put = <TRequest = any, TResponse = AxiosResponse<TRequest>>(
    url: string,
    data?: TRequest,
    withToken?: boolean,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    return http(withToken).put<TRequest, TResponse>(url, data, config);
  };

  const patch = <TRequest = any, TResponse = AxiosResponse<TRequest>>(
    url: string,
    data?: TRequest,
    withToken?: boolean,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> => {
    return http(withToken).patch<TRequest, TResponse>(url, data, config);
  };

  return {
    get,
    post,
    put,
    patch,
  };
};

export default Api;
