import {
  AppstoreOutlined,
  DashboardOutlined,
  FileTextOutlined,
  MailOutlined
} from '@ant-design/icons'
// BellOutlined 铃铛

const LeftMenu = [
  { pathName: '/dashboard', title: '数据中心', icon: DashboardOutlined },
  { pathName: '/project', title: '项目列表', icon: AppstoreOutlined },
  { pathName: '/document', title: '文档', icon: FileTextOutlined },
  { pathName: '/messageNotification', title: '站内信', icon: MailOutlined }
]

export { LeftMenu }
