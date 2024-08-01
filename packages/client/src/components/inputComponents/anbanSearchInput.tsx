import { SearchOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { ConfigProvider, Input } from 'antd'
import React from 'react'

type AnBanType = {
  placeholder: string
  className: string
  setKeyWord: (value: string) => Promise<unknown>
}

const AnBanInput: React.FC<AnBanType> = (props: AnBanType) => {
  const { className, placeholder, setKeyWord } = props
  const setKeyWordFn = async (value: string) => {
    const res = await setKeyWord(value)
    return res
  }

  const { run } = useRequest(setKeyWordFn, {
    debounceWait: 100,
    manual: true
  })

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBg: 'rgba(var(--ab-neutral-light))',
            hoverBg: 'rgba(var(--ab-neutral-light))',
            colorBgContainer: 'rgba(var(--ab-neutral-light))',
            hoverBorderColor: 'rgba(var(--ab-border-300))',
            activeBorderColor: 'rgba(var(--ab-border-300))',
            colorBorder: 'rgba(var(--ab-border-300))'
          }
        }
      }}
    >
      <Input
        className={className}
        placeholder={placeholder}
        allowClear
        onChange={e => run(e.target.value)}
        prefix={<SearchOutlined />}
      />
    </ConfigProvider>
  )
}

export default AnBanInput
