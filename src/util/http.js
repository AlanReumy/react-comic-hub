import axios from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}

class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  static axiosInstance = axios.create(defaultConfig)
  /**
   * 请求拦截
   */
  httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }

  /**
   * 响应拦截
   */
  httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }

  /**
   * GET请求
   */
  httpGet(url, params) {
    return Http.axiosInstance
      .get(url, params)
      .then((res) => res.data)
      .catch()
  }

  /**
   * POST请求
   */
  httpPost(url, params) {
    return Http.axiosInstance
      .post(url, params)
      .then((res) => res.data)
      .catch()
  }
}

export const http = new Http()
