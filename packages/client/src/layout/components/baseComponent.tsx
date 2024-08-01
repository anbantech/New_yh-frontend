import React from 'react'

type BaseType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

const NavHeader: React.FC<BaseType> = (props: BaseType) => {
  const { children } = props

  return (
    <div className='h-[48px] w-full text-skin-text-700 bg-skin-neutral-light  px-[24px]   border-solid border-b-[1px] border-skin-border-100 flex items-center justify-between'>
      {children}
    </div>
  )
}

export default NavHeader
