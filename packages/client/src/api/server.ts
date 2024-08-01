import Axios from 'axios'

import { LoginPersistStore } from '@/store/loginStore/loginStore'

// import * as Auth from 'Src/utils/authController'

const axiosConfig = {
  timeout: 1000 * 90
}

const instance = Axios.create(axiosConfig)

instance.interceptors.request.use(res => {
  // 使用 AuthController 获取 loaclstorage  中的 token
  const { AuthToken } = LoginPersistStore.getState()
  if (AuthToken && !res.url?.includes('login')) {
    res.headers.Authorization = `${AuthToken}`
  }
  return res
})

instance.interceptors.response.use(
  res => {
    /**
     * 处理 blob 文件流返回值
     * 从 http headers 中取到文件名和文件流，抛出给业务逻辑层
     */
    if (res.headers['content-disposition']) {
      let fileName
      try {
        // eslint-disable-next-line prefer-destructuring
        fileName = res.headers['content-disposition'].match('filename=(.*)')[1]
      } catch {
        fileName = '固件检测报告.pdf'
      }
      if (res.status === 200) return { data: res.data, fileName }
      return Promise.reject(new Error('前端拒绝接受错误码文件'))
    }
    /**
     * 正常接口，直接返回 res.data
     */
    const { code } = res.data
    if (+code < 300) {
      return res.data
    }
    if (+code > 300 && res.status === 200) {
      return res.data
    }
  },
  error => {
    /**
     * http 500 错误
     * 后端接口异常，直接抛出服务异常
     */
    if (error.response?.status >= 500) {
      // 如果在登录页就遇到服务异常，无需通知账户登出
      //   if (!window.location.href.includes('/protocol')) {
      //     Auth.authErrorControllerInstance.setInterfaceMessage('服务异常')
      //   }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        code: 0,
        message: '服务异常'
      })
    }
    // 没有 token 401
    // token 错误 403
    // if (error.response?.status === 401 || error.response?.status === 403) {
    //   // 此处错误直接上报给 authErrorControllerInstance，委托它处理异常 message
    //   Auth.authErrorControllerInstance.setInterfaceMessage('该次登录已失效，请重新登录')
    //   // code 为 0 表示正常状态，不会抛出任何错误
    //   // eslint-disable-next-line prefer-promise-reject-errors
    //   return Promise.reject({
    //     code: 0,
    //     message: '鉴权失败：身份令牌失效'
    //   })
    // }
    /**
     * http 400, 1011 错误码，数据正在导入中，捕获错误并返回空对象
     * 下层业务逻辑 res.data 会判断为 undefined 不走赋值逻辑
     */
    if (error.response?.data?.code === 1011) {
      return {}
    }
    /**
     * http 400，其他错误码
     * 抛出后端的 error.response.data 对象给 throwErrorMessage 处理
     */
    if (error.response?.data) {
      return Promise.reject(error.response.data)
    }
    /**
     * 前端请求超时错误，重写错误内容
     */
    if (error.message === `timeout of ${axiosConfig.timeout}ms exceeded`) {
      return Promise.reject(new Error('请求连接超时，请检查前后端通讯是否正常'))
    }
    /**
     * 未知错误
     */
    return Promise.reject(error)
  }
)

export default instance
