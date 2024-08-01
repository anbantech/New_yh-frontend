import { message } from 'antd'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { loginIn } from '@/api/apiResult/login/loginApi'

import { loginPersistStoreType, loginStoreType, permissionType } from './loginStoreType'

export const LoginPersistStore = create<loginPersistStoreType>()(
  persist(
    set => ({
      account: null,
      AuthToken: null,
      isHasPerms: null,
      secondPermsMenu: [],
      thirdPermsMenu: [],
      removeUserInfo: () => set(() => ({ account: null, AuthToken: null })),
      setUserInfo: (isHasPerms, secondPermsMenu, thirdPermsMenu, account, token) =>
        set(() => ({
          isHasPerms,
          secondPermsMenu,
          thirdPermsMenu,
          account: account,
          AuthToken: token
        }))
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
      if (res) {
        const { token, user } = res
        const { account } = user
        const isHasPerms = res.collection.perms['1'][0].id
        if (!isHasPerms) return message.error('暂无登录权限,请联系管理员')
        const secondPermsMenu = [] as permissionType[]
        const thirdPermsMenu = [] as permissionType[]
        const perms = res.collection.perms
        for (const key in perms) {
          perms[key as keyof typeof perms].forEach(perm => {
            const permObject = { id: perm.id, permissionName: perm.permissionName }
            if (perm.type === 2) {
              secondPermsMenu.push(permObject)
            } else if (perm.type === 3) {
              thirdPermsMenu.push(permObject)
            }
          })
        }
        LoginPersistStore.getState().setUserInfo(
          isHasPerms,
          secondPermsMenu,
          thirdPermsMenu,
          account,
          token
        )
      }
      get().toggleLoading()
      return res
    } catch (error) {
      message.error((error as { message: string }).message)
      get().toggleLoading()
    }
  }
}))
