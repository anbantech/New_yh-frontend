import { IconShutdown, IconUpCaret } from '@anban/iconfonts'
import classNames from 'classnames'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { setCopyWritingPersistStore } from '@/store/globalStore/globalStore'
import { LoginPersistStore } from '@/store/loginStore/loginStore'

// logo 模块
const HeaderLogo: React.FC<{ logo: string }> = (props: { logo: string | null }) => {
  const { logo } = props
  if (!logo) return
  return <img style={{ width: '113px', height: '24px' }} src={logo} alt='' />
}

const HeaderLogoMemo = React.memo(HeaderLogo)

// 退出模块

const HeaderLoginCardComponents: React.FC<{ name: string | null }> = props => {
  const { name } = props
  const navigate = useNavigate()
  const loginOut = () => {
    // 清除所有缓存数据
    LoginPersistStore.getState().removeUserInfo()
    navigate('/login')
  }
  return (
    <div
      style={{
        boxShadow:
          '0px 5px 12px 4px rgba(0, 0, 0, 0.03), 0px 3px 6px 0px rgba(0, 0, 0, 0.06), 0px 1px 2px -2px rgba(0, 0, 0, 0.09)'
      }}
      className='w-[342px]  flex flex-col absolute z-20 right-0 top-10  pt-[4px] pb-[4px] bg-skin-neutral-light rounded-[2px] '
    >
      <div className='h-[32px] pl-[12px] flex items-center'>
        <span className='h-[32px] leading-[32px] text-skin-text-500'>{name}</span>
      </div>
      <div
        role='button'
        tabIndex={0}
        className='pl-[12px] h-[32px] flex items-center border-t-[1px] border-solid border-skin-border-100 cursor-pointer'
        onClick={loginOut}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            loginOut()
          }
        }}
      >
        <IconShutdown className='w-[16px] h-[16px] text-skin-text-700' />
        <span className='text-skin-text-700 text-[14px] h-[32px] font-normal leading-[32px] ml-[8px]'>
          退出登录
        </span>
      </div>
    </div>
  )
}

const HeaderLoginComponents: React.FC = () => {
  const { account } = LoginPersistStore.getState()
  const [isRotate, setIsRotate] = useState(false)
  const IconUpCaretClassName = classNames(
    'flex',
    'w-[18px]',
    'h-[18px]',
    'text-skin-text-700',
    'cursor-pointer',
    'transform',
    { 'rotate-180': isRotate },
    { 'rotate-0': !isRotate }
  )

  return (
    <div
      role='button'
      tabIndex={0}
      className='w-[70px] flex items-center relative justify-between h-full '
      onClick={() => setIsRotate(!isRotate)}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          setIsRotate(!isRotate)
        }
      }}
    >
      <span className='h-full leading-[47px] text-[14px] text-skin-text-700 font-normal'>
        {account}
      </span>
      <IconUpCaret className={IconUpCaretClassName} />
      {isRotate && <HeaderLoginCardComponents name={account} />}
    </div>
  )
}

const Header: React.FC = () => {
  const { pageLogo } = setCopyWritingPersistStore.getState()
  return (
    <div className='w-full h-full ab-flex-row-cloumn-center justify-between'>
      <div className='w-[216px] shrink-0'>{pageLogo && <HeaderLogoMemo logo={pageLogo} />}</div>
      <div className='w-[70px] mr-[20px]  '>
        <HeaderLoginComponents />
      </div>
    </div>
  )
}

const HeaderMemo = React.memo(Header)

export default HeaderMemo
