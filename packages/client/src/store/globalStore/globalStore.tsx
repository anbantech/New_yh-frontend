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

export { LeftMenu, setCopyWritingPersistStore }
