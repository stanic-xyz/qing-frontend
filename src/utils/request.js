import axios from 'axios'
import store from '../store'
import moment from 'moment'
import db from './localstorage'

moment.locale('zh-cn')

// 统一配置
let axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8080/',
  responseType: 'json',
  validateStatus(status) {
    // 200 外的状态码都认定为失败
    return status === 200
  }
})
axiosInstance.defaults.headers.put['Content-Type'] = 'application/json; charset=UTF-8'

axiosInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.Authentication = store.state.account.token
  let expireTime = store.state.account.expireTime
  let now = moment().format('YYYYMMDDHHmmss')
  // 让token早10秒种过期，提升“请重新登录”弹窗体验
  if (now - expireTime >= -10) {
    alert('很抱歉，登录已过期，请重新登录')
    this.$bvModal.msgBoxConfirm('这是上面的东西').then(value => {
      console.log(value)
      db.clear()
      location.reload()
    })
  }
  // 有 token就带上
  if (store.state.account.token) {
    config.headers.Authentication = store.state.account.token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      let errorMessage = error.response.data === null ? '系统内部异常，请联系网站管理员' : error.response.data.message
      switch (error.response.status) {
      case 404:
        alert('资源未找到')
        break
      case 403:
      case 401:
        alert('很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效')
        break
      default:
        alert(errorMessage)
        break
      }
    }
    return Promise.reject(error)
  })

const request = {
  get: function (url, params) {
    let _params
    if (Object.is(params, undefined)) {
      _params = ''
    } else {
      _params = '?'
      for (let key in params) {
        if (params.hasOwnProperty(key) && params[key] !== null) {
          _params += `${key}=${params[key]}&`
        }
      }
    }
    return axiosInstance.get(`${url}${_params}`)
  },
  post(url, params) {
    return axiosInstance.post(url, params)
  },
  put(url, params) {
    return axiosInstance.put(url, params, {
      transformRequest: [(params) => {
        let result = ''
        Object.keys(params).forEach((key) => {
          if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
            result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
          }
        })
        return result
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  delete(url, params) {
    let _params
    if (Object.is(params, undefined)) {
      _params = ''
    } else {
      _params = '?'
      for (let key in params) {
        if (params.hasOwnProperty(key) && params[key] !== null) {
          _params += `${key}=${params[key]}&`
        }
      }
    }
    return axiosInstance.delete(`${url}${_params}`)
  },
  upload(url, params) {
    return axiosInstance.post(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
export default request
