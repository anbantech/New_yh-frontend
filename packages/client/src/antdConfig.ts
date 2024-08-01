import type { ConfigProviderProps } from 'antd/es/config-provider'
import zhCN from 'antd/lib/locale/zh_CN'

export const theme: ConfigProviderProps['theme'] = {
  components: {
    Form: {
      itemMarginBottom: 16
    },
    Table: {
      cellPaddingBlockSM: 5,
      cellPaddingInlineSM: 16,
      headerBg: 'fff',
      rowHoverBg: 'rgb(var(--ab-primary-100))'
    },
    Tabs: {
      horizontalMargin: '0',
      horizontalItemGutter: 24
    },
    Drawer: {
      padding: 0,
      paddingLG: 0
    }
  },
  token: {
    borderRadius: 2
  }
}

export const locale: ConfigProviderProps['locale'] = zhCN

export default {
  theme,
  locale
}
