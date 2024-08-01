import { Button } from 'antd'
import React from 'react'

interface IconButtonType {
  name: string
  ButtonStyle: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any
  IconStyle: string
  onClick: () => void
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed'
  loading?: boolean
}

const IconButton: React.FC<IconButtonType> = props => {
  const { name, ButtonStyle, Icon, IconStyle, onClick, type = 'primary', loading = false } = props
  return (
    <Button onClick={onClick} className={ButtonStyle} type={type} loading={loading}>
      <Icon className={IconStyle} />
      <span className='text-[14px] font-normal'>{name} </span>
    </Button>
  )
}

export default IconButton
