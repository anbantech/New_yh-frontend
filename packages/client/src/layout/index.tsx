import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

import HeaderComponents from '@/layout/components/header'
import LeftNav from '@/layout/components/leftNav'
import { borderBottom_100 } from '@/styleSheet/border/borderTailwind'

const { Header, Content } = Layout

const LayoutIndex: React.FC = () => {
  return (
    <Layout>
      <Header
        className={`h-[48px] pl-[24px] pr-[10px]  bg-skin-neutral-light ${borderBottom_100.join(' ')}`}
      >
        <HeaderComponents />
      </Header>
      <Content className='flex h-[calc(100vh-48px)]'>
        <LeftNav />
        <Outlet />
      </Content>
    </Layout>
  )
}

export default LayoutIndex
