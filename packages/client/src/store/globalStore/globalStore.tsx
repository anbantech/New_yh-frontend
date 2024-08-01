import { IconCC, IconJava } from '@anban/iconfonts'
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

const permsMenu1 = ['3422d6600ee940b9b59b0ae90acf121']

const permsMenu2 = {
  '9529d6600ee940b9b59b0ae90acfbded': 0,
  bde97dad5e404c5dbba32a15bd310635: 1
}

const ProjectIcon = {
  0: <IconCC style={{ width: '14px', height: '16px', marginRight: '5px' }} />,
  1: <IconJava style={{ width: '14px', height: '16px', marginRight: '5px' }} />
}

const permsMenu3 = {
  '872h6s22326600ee940b9b59b0sdj8': 4,
  ms122326600ee940b9b59b0sdj8221: 7,
  uus22326600ee940b9b59b0sdj82bg: 3,
  '09sdd6600ee940b9b59b0ae9ssf1sda': 1,
  '6shsbs22326600ee940b9b59b0s2sss': 5,
  sad21326600ee940b9b59b0ae900sjs: 6,
  '1011d6600ee940b9b59b0ae90acf7786': 0,
  '3422d6600ee940b9b59b0ae90acf121s': 2
}

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
      pageLogo: null,
      setCopyWriting: (id, icon, productDesc, productName, firm, logo, report, enable, pageLogo) =>
        set(() => ({ id, icon, productDesc, productName, firm, logo, report, enable, pageLogo })),
      removeCopyWriting: () =>
        set(() => ({
          id: null,
          icon: null,
          productDesc: null,
          productName: null,
          logo: null,
          firm: null,
          report: null,
          enable: null,
          pageLogo: null
        }))
    }),
    {
      name: 'copywriting' // name of the item in the storage (must be unique)
    }
  )
)

export { LeftMenu, permsMenu1, permsMenu2, permsMenu3, ProjectIcon, setCopyWritingPersistStore }
