import { ConfigProvider } from 'antd'

import antdConfig from '@/antdConfig'
import Routes from '@/router/routers'

function App() {
  return (
    <ConfigProvider {...antdConfig}>
      <Routes />
    </ConfigProvider>
  )
}

export default App
