import React, { PropsWithChildren } from 'react'

const CardComponents: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className
}) => {
  console.log(className)
  function mergeClass(cls?: string) {
    if (!cls) return 'ab-margin-16-24 bg-skin-neutral-light'
    return cls + ' ab-margin-16-24 bg-skin-neutral-light'
  }
  return (
    <div
      style={{
        boxShadow:
          '0px 5px 12px 4px rgba(0, 0, 0, 0.03), 0px 3px 6px 0px rgba(0, 0, 0, 0.06), 0px 1px 2px -2px rgba(0, 0, 0, 0.09)'
      }}
      className={`${mergeClass(className)} mt-[12px] flex p-[10px] items-center rounded-[2px] bg-skin-neutral-light`}
    >
      {children}
    </div>
  )
}

export default CardComponents
