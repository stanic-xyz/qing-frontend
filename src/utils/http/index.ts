import moment from "moment";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import type {
  CancelRequestSource,
  QingHttpRequestConfig,
  RequestInterceptors,
  RequestMethods,
} from "@/utils/http/types";
import { userInfoStore } from "@/stores/session";
import { formatToken } from "@/utils/auth";

moment.locale("zh-cn");

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-http-config-1
const defaultConfig: QingHttpRequestConfig = {
  // 请求超时时间
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    Authorization: formatToken("12312312"),
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  // 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
};

/**
 * 封装的请求对象
 */
class QingHttp {
  /**
   * 存放取消方法的集合
   * 在创建请求后将取消请求方法 push 到该集合中
   * 封装一个方法，可以取消请求，传入 url: string|string[]
   * 在请求之前判断同一URL是否存在，如果存在就取消请求
   */
  cancelRequestSourceList?: CancelRequestSource[];
  /** 初始化配置对象 */
  private readonly initConfig: QingHttpRequestConfig;
  // http 实例
  private instance: AxiosInstance;
  /**
   * 存放所有请求URL的集合
   * 请求之前需要将url push到该集合中
   * 请求完毕后将url从集合中删除
   * 添加在发送请求之前完成，删除在响应之后删除
   */
  private requestUrlList?: [];
  // 拦截器对象
  private interceptorsObj?: RequestInterceptors;

  constructor() {
    this.instance = axios.create(defaultConfig);
    this.initConfig = defaultConfig;
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  // 取消全部请求
  cancelAllRequest() {
    this.cancelRequestSourceList?.forEach((source) => {
      const key = Object.keys(source)[0];
      source[key]();
    });
  }

  /**
   * 取消请求
   * @param url 请求地址
   */
  cancelRequest(url: string | string[]) {
    if (typeof url === "string") {
      // 取消单个请求
      const sourceIndex = this.getSourceIndex(url);
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]();
    } else {
      // 存在多个需要取消请求的地址
      url.forEach((u) => {
        const sourceIndex = this.getSourceIndex(u);
        sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]();
      });
    }
  }

  /** 通用请求工具函数 */
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: QingHttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...(axiosConfig ? axiosConfig : this.initConfig),
    } as QingHttpRequestConfig;

    // 单独处理自定义请求/响应回掉
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((response: AxiosResponse<T, any>) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /** 单独抽离的get工具函数 */
  public get<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: QingHttpRequestConfig
  ): Promise<P> {
    return this.request<P>("get", url, params, config);
  }

  /** 单独抽离的post工具函数 */
  public post<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: QingHttpRequestConfig
  ): Promise<P> {
    console.log(url, params, config);
    const requestConfig = config ? config : this.initConfig;
    requestConfig.data = params;
    return this.instance.post(url, params, requestConfig);
  }

  private httpInterceptorsRequest(): void {
    /** 请求白名单，放置一些不需要token的接口（通过设置请求白名单，防止token过期后再请求造成的死循环问题） */
    const whiteList = ["/refreshToken", "/login"];
    this.instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        const store = userInfoStore();
        config.headers;
        return config;
      },
      (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
  }

  /** 响应拦截 */
  private httpInterceptorsResponse(): void {
    // 全局响应拦截器保证最后执行
    // this.instance.interceptors.response.use(
    //   (config: QingHttpRequestConfig) => {
    //     return this.initConfig;
    //     return new Promise((resolve) => {
    //       resolve(this.initConfig);
    //     });
    //   },
    //   (error) => {
    //     return Promise.reject(error);
    //   }
    // );
  }

  /**
   * @description: 获取指定 url 在 cancelRequestSourceList 中的索引
   * @param {string} url
   * @returns {number} 索引位置
   */
  private getSourceIndex(url: string): number {
    return this.cancelRequestSourceList?.findIndex(
      (item: CancelRequestSource) => {
        return Object.keys(item)[0] === url;
      }
    ) as number;
  }

  /**
   * @description: 删除 requestUrlList 和 cancelRequestSourceList
   * @param {string} url
   * @returns {*}
   */
  private delUrl(url: string) {
    const urlIndex = this.requestUrlList?.findIndex((u) => u === url);
    const sourceIndex = this.getSourceIndex(url);
    // 删除url和cancel方法
    urlIndex !== -1 &&
      this.cancelRequestSourceList?.splice(urlIndex as number, 1);
    sourceIndex !== -1 &&
      this.cancelRequestSourceList?.splice(sourceIndex as number, 1);
  }
}

export default QingHttp;
