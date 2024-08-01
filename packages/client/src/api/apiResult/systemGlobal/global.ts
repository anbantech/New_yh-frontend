import request from '@/api/server'
import { setCopyWritingPersistStore } from '@/store/globalStore/globalStore'

function fetchSystemInfoConfig() {
  return request.get('/yh/system/getEnableTrademark').then(res => res.data)
}

// 检查项目名称

export function checkProjectName(params: { projectName: string }) {
  return request.post('/yh/project/checkName', params)
}

export const setCopyWriting = async () => {
  const data = await fetchSystemInfoConfig()
  if (data) {
    const { id, icon, productDesc, productName, firm, logo, report, enable, pageLogo } = data
    setCopyWritingPersistStore
      .getState()
      .setCopyWriting(id, icon, productDesc, productName, firm, logo, report, enable, pageLogo)
  }
}
