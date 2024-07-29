export interface loginPersistStoreType {
  account: null | string
  AuthToken: null | string
  removeUserInfo: () => void
  setUserInfo: (account: string, token: string) => void
}

export interface loginStoreType {
  loading: boolean
  toggleLoading: () => void
  login: (params: {
    account: string
    loginPlatform: 0 // platformEnum: 0 for pc, 1 for app; Since this is a web page, it is always 0
    organizationId: string
    password: string
  }) => Promise<unknown>
}
