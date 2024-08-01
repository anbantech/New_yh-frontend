import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { LeftMenu } from '@/store/globalStore/globalStore'

const selectOrHover = classNames('itemgradient')
const navItemTitleActive = classNames('navItemTitleActive')

const LeftNavSider: React.FC = () => {
  const matches = useLocation()

  const navigate = useNavigate()

  const [siderStatus, setSiderStatus] = useState(false)

  const selectNavItem = (pathName: string) => {
    if (pathName === matches.pathname) return
    navigate(pathName, { state: { name: pathName } })
  }

  const routerPathName = useMemo(() => {
    return `/${matches.pathname.split('/')[1]}`
  }, [matches.pathname])

  return (
    <div
      className={`${!siderStatus ? 'w-[240px]' : 'w-[60px]'} sider  h-[calc(100vh-48px)] bg-skin-neutral-light  border-solid border-r-[1px] border-skin-border-100 relative flex flex-col items-center`}
    >
      <div className='w-full'>
        {LeftMenu.map(item => {
          return (
            <div
              onClick={() => {
                selectNavItem(item.pathName)
              }}
              role='button'
              tabIndex={0}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  selectNavItem(item.pathName)
                }
              }}
              key={item.title}
              className={`${routerPathName === item.pathName ? selectOrHover : ''}   cursor-pointer group/leftNavItem flex px-[24px] gap-[12px] h-[48px] items-center `}
            >
              <item.icon
                className={`${
                  routerPathName === item.pathName
                    ? 'text-skin-primary-600'
                    : 'text-skin-neutral-dark'
                } text-lg`}
              />
              {!siderStatus && (
                <span
                  className={`${routerPathName === item.pathName ? navItemTitleActive : ''} navItemTitle items-center overflow-hidden whitespace-nowrap`}
                >
                  {item.title}
                </span>
              )}
            </div>
          )
        })}
      </div>

      <div
        role='button'
        tabIndex={0}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            setSiderStatus(!siderStatus)
          }
        }}
        className='group absolute bottom-2'
        onClick={() => {
          setSiderStatus(!siderStatus)
        }}
      >
        {siderStatus ? (
          <MenuUnfoldOutlined className='text-lg group-hover:text-skin-primary-600' />
        ) : (
          <MenuFoldOutlined className='text-lg group-hover:text-skin-primary-600' />
        )}
      </div>
    </div>
  )
}

export default LeftNavSider
