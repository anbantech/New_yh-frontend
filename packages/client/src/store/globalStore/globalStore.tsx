import {
  AppstoreOutlined,
  DashboardOutlined,
  FileTextOutlined,
  MailOutlined
} from '@ant-design/icons'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { SystemType } from './globalStoreType'
// BellOutlined  铃铛图标

const LeftMenu = [
  { pathName: '/dashboard', title: '数据中心', icon: DashboardOutlined },
  { pathName: '/project', title: '项目列表', icon: AppstoreOutlined },
  { pathName: '/document', title: '文档', icon: FileTextOutlined },
  { pathName: '/messageNotification', title: '站内信', icon: MailOutlined }
]

const permsMenu1 = ['337b1f3fe0e042f0ab374c57a8e93305', '3422d6600ee940b9b59b0ae90acf121']

const permsMenu2 = ['9529d6600ee940b9b59b0ae90acfbded', 'bde97dad5e404c5dbba32a15bd310635']

const permsMenu3 = [
  '872h6s22326600ee940b9b59b0sdj8',
  'ms122326600ee940b9b59b0sdj8221',
  'uus22326600ee940b9b59b0sdj82bg',
  '09sdd6600ee940b9b59b0ae9ssf1sda',
  '6shsbs22326600ee940b9b59b0s2sss',
  'sad21326600ee940b9b59b0ae900sjs',
  '1011d6600ee940b9b59b0ae90acf7786'
]

// 获取状态参数配置

const setCopyWritingPersistStore = create<SystemType>()(
  persist(
    set => ({
      id: null,
      icon: null,
      productDesc: null,
      productName: null,
      logo: null,
      firm: null,
      report: null,
      enable: null,
      setCopyWriting: (id, icon, productDesc, productName, firm, logo, report, enable) =>
        set(() => ({ id, icon, productDesc, productName, firm, logo, report, enable })),
      removeCopyWriting: () =>
        set(() => ({
          id: null,
          icon: null,
          productDesc: null,
          productName: null,
          logo: null,
          firm: null,
          report: null,
          enable: null
        }))
    }),
    {
      name: 'copywriting' // name of the item in the storage (must be unique)
    }
  )
)

export { LeftMenu, permsMenu1, permsMenu2, permsMenu3, setCopyWritingPersistStore }
