import { message } from 'antd'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { loginIn } from '@/api/apiResult/login/login'

import { loginPersistStoreType, loginStoreType } from './loginStoreType'

export const LoginPersistStore = create<loginPersistStoreType>()(
  persist(
    set => ({
      account: null,
      AuthToken: null,
      removeUserInfo: () => set(() => ({ account: null, AuthToken: null })),
      setUserInfo: (account, token) => set(() => ({ account: account, AuthToken: token }))
    }),
    {
      name: 'login' // name of the item in the storage (must be unique)
    }
  )
)

export const LoginStore = create<loginStoreType>((set, get) => ({
  loading: false,
  toggleLoading: () => {
    set({ loading: !get().loading })
  },
  login: async params => {
    get().toggleLoading()
    try {
      const res = await loginIn(params)
      if (res.account) {
        LoginPersistStore.getState().setUserInfo(res.account, res.access_token)
      }
      get().toggleLoading()
      return res
    } catch (error) {
      message.error((error as { message: string }).message)
      get().toggleLoading()
    }
  }
}))
