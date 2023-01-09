import type { RequestConfig } from "@/utils/request/types";
import Request from "@/utils/request";

interface QingRequestConfig<T> extends RequestConfig {
  data?: T;
}

interface QingResponse<T> {
  code: number;
  message: string;
  data: T;
}

/**
 *添加一个请求信息
 */
const request = new Request({
  baseURL: "http://localhost:8080",
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      console.log("实例请求拦截器");
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result) => {
      console.log("实例响应拦截器");
      console.log(result);
      return result;
    },
  },
});

/**
 * @description: 函数的描述
 * @interface D 请求参数的interface
 * @interface T 响应结构的intercept
 * @param {QingRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const qingRequest = <D, T = any>(config: QingRequestConfig<D>) => {
  const { method = "GET" } = config;
  if (method === "get" || method === "GET") {
    config.params = config.data;
  }
  return request.request<QingResponse<T>>(config);
};

export default qingRequest;
