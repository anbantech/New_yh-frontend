import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { LeftMenu } from '@/store/globalStore'

const selectOrHover = classNames('itemgradient')
const navItemTitleActive = classNames('navItemTitleActive')

const LeftNavSider: React.FC = () => {
  const matches = useLocation()

  const navigate = useNavigate()

  const selectNavItem = (pathName: string) => {
    if (pathName === matches.pathname) return
    navigate(pathName, { state: { name: pathName } })
  }

  const routerPathName = useMemo(() => {
    return matches.pathname
  }, [matches.pathname])
  return (
    <div className='h-[calc(100vh-48px)] bg-skin-neutral-light w-[240px] border-solid border-r-[1px] border-skin-border-100 relative flex flex-col items-center'>
      <div className='w-full'>
        {LeftMenu.map(item => {
          return (
            <div
              role='button'
              tabIndex={0}
              onClick={() => {
                selectNavItem(item.pathName)
              }}
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
                } text-base`}
              />
              <span
                className={`${routerPathName === item.pathName ? navItemTitleActive : ''} navItemTitle `}
              >
                {item.title}
              </span>
            </div>
          )
        })}
      </div>

      <div className='absolute bottom-0'>
        <MenuFoldOutlined />
        <MenuUnfoldOutlined />
      </div>
    </div>
  )
}

export default LeftNavSider
