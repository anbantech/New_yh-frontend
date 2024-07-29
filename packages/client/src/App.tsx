import { ConfigProvider } from 'antd'
import { useEffect } from 'react'

import antdConfig from '@/antdConfig'
import Routes from '@/router/routers'

import { setCopyWriting } from './api/apiResult/systemGlobal/global'

function App() {
  useEffect(() => {
    setCopyWriting()
  })
  return (
    <ConfigProvider {...antdConfig}>
      <Routes />
    </ConfigProvider>
  )
}

export default App
