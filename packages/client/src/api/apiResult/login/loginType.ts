export interface loginInParams {
  account: string
  loginPlatform: 0 // platformEnum: 0 for pc, 1 for app; Since this is a web page, it is always 0
  organizationId: string
  password: string
}

type permsType = {
  path?: 'string'
  createBy: number
  updateAt: string
  id: string
  platformName: string
  type: number
  enableFlag: number
  createAt: string
  parentId: string
  permissionName: string
}

export interface loginInResponse {
  token: string
  environment: string
  loginPlatform: number
  expireAt: null | number
  collection: {
    roles: null | string
    perms: {
      '0': permsType[]
      '1': permsType[]
      '2': permsType[]
      '3': permsType[]
    }
  }
  user: {
    id: number
    account: string
    username: string
    companyName: null | string
    jobNumber: string
    phone: string
    email: string
    enableFlag: number
    status: number
    avatar: null | number | string
    expireAt: string
    createAt: string
    createBy: string
    updateAt: null | string
    updateBy: null | string
  }
}
