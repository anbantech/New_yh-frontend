export interface loginInParams {
  account: string
  loginPlatform: 0 // platformEnum: 0 for pc, 1 for app; Since this is a web page, it is always 0
  organizationId: string
  password: string
}

export interface loginInResponse {
  access_token: string
  id: string // id 长度超过 MAX_SAFE_VALUE 改为使用字符串存储
  roles: string[]
  account: string
}
