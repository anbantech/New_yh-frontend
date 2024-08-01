import request from '@/api/server'

import { loginInParams, loginInResponse } from './loginType'

// 登录
export function loginIn(params: loginInParams) {
  return request.post<loginInResponse>('/yh/auth/login', params).then(res => res.data)
}

// 登出

export function loginOu() {}
