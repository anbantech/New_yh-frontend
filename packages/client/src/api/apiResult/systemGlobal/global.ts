import request from '@/api/server'
import { setCopyWritingPersistStore } from '@/store/globalStore/globalStore'

function fetchSystemInfoConfig() {
  return request.get('/yh/system/getEnableTrademark').then(res => res.data)
}

export const setCopyWriting = async () => {
  const data = await fetchSystemInfoConfig()
  if (data) {
    const { id, icon, productDesc, productName, firm, logo, report, enable } = data
    setCopyWritingPersistStore
      .getState()
      .setCopyWriting(id, icon, productDesc, productName, firm, logo, report, enable)
  }
}
