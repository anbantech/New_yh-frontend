import React from 'react'

function mergeClassName(cls?: string, disabled?: boolean) {
  const defaultCls = disabled
    ? `text-skin-neutral-600 font-bold`
    : `text-skin-primary-600 font-bold`
  if (!cls) return defaultCls
  return `${cls} ${defaultCls}`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mergeStyle(style?: React.CSSProperties, onClick?: (e: any) => void) {
  if (!style) return style
  if (typeof onClick === 'function') {
    return {
      ...style,
      cursor: 'pointer'
    } as React.CSSProperties
  } else {
    return style
  }
}

interface LinkButtonProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  /**
   * LinkButton 的置灰状态
   */
  disabled?: boolean
}

/**
 * 文字按钮，内部使用 SPAN 标签实现
 */
const LinkButton: React.FC<LinkButtonProps> = ({
  disabled = false,
  className,
  style,
  onClick,
  children,
  ...restProps
}) => {
  return (
    <span className={disabled ? 'pointer-events-none' : ''}>
      <span
        className={mergeClassName(className, disabled)}
        style={mergeStyle(style, onClick)}
        onClick={onClick}
        role='button'
        tabIndex={0}
        aria-hidden='true'
        {...restProps}
      >
        {children}
      </span>
    </span>
  )
}

export default LinkButton
