import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

import LeftNav from '@/layout/components/leftNav'

const { Header, Content } = Layout

const LayoutIndex: React.FC = () => {
  return (
    <Layout>
      <Header className={`h-[48px] pl-[24px] pr-[10px]  bg-skin-neutral-light`}>
        <span>222</span>
      </Header>
      <Content className='flex'>
        <LeftNav />
        <Outlet />
      </Content>
    </Layout>
  )
}

export default LayoutIndex
