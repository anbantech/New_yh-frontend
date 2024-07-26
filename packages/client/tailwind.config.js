import tailwindcss from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

import leftNavItemSelect from './src/layout/components/compoentsStyleSheet'

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue != null) {
      return `rgba(var(${variableName}),${opacityValue})`
    }
    return `rgb(var(${variableName})`
  }
}

const anbanPlugin = plugin(function ({ addUtilities }) {
  // 自定义插件逻辑
  // addBaseClass: 添加基础 CSS 类名
  // addVariant: 添加 CSS 变体
  // e: 类名缀操作函数
  // getConfig: 获取配置项
  // prefix: 前缀函数
  addUtilities({
    ...leftNavItemSelect
  })
})

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-600': '#0077FF',
        skin: {
          /* Dark Mode */

          /* Neutral Colors */
          'neutral-light': withOpacity(`--ab-neutral-light`),
          'neutral-dark': withOpacity(`--ab-neutral-dark`),
          'neutral-100': withOpacity(`--ab-neutral-100`),
          'neutral-200': withOpacity(`--ab-neutral-200`),
          'neutral-300': withOpacity(`--ab-neutral-300`),
          'neutral-400': withOpacity(`--ab-neutral-400`),
          'neutral-500': withOpacity(`--ab-neutral-500`),
          'neutral-600': withOpacity(`--ab-neutral-600`),
          'neutral-700': withOpacity(`--ab-neutral-700`),
          'neutral-800': withOpacity(`--ab-neutral-800`),
          'neutral-900': withOpacity(`--ab-neutral-900`),
          'neutral-1000': withOpacity(`--ab-neutral-1000`),

          /* Text Colors */
          'text-light': withOpacity(`--ab-text-light`),
          'text-dark': withOpacity(`--ab-text-dark`),
          'text-100': withOpacity(`--ab-text-100`),
          'text-200': withOpacity(`--ab-text-200`),
          'text-300': withOpacity(`--ab-text-300`),
          'text-400': withOpacity(`--ab-text-400`),
          'text-500': withOpacity(`--ab-text-500`),
          'text-600': withOpacity(`--ab-text-600`),
          'text-700': withOpacity(`--ab-text-700`),
          'text-800': withOpacity(`--ab-text-800`),

          /* Border Colors */
          'border-100': withOpacity(`--ab-border-100`),
          'border-200': withOpacity(`--ab-border-200`),
          'border-300': withOpacity(`--ab-border-300`),
          'border-400': withOpacity(`--ab-border-400`),
          'border-500': withOpacity(`--ab-border-500`),
          'border-600': withOpacity(`--ab-border-600`),

          /* Background Colors */
          'background-light': withOpacity(`--ab-background-light`),
          'background-dark': withOpacity(`--ab-background-dark`),
          'background-100': withOpacity(`--ab-background-100`),
          'background-200': withOpacity(`--ab-background-200`),
          'background-300': withOpacity(`--ab-background-300`),
          'background-400': withOpacity(`--ab-background-400`),
          'background-500': withOpacity(`--ab-background-500`),
          'background-600': withOpacity(`--ab-background-600`),
          'background-700': withOpacity(`--ab-background-700`),
          'background-800': withOpacity(`--ab-background-800`),
          /* Primary Colors */
          'primary-100': withOpacity(`--ab-primary-100`),
          'primary-200': withOpacity(`--ab-primary-200`),
          'primary-300': withOpacity(`--ab-primary-300`),
          'primary-400': withOpacity(`--ab-primary-400`),
          'primary-500': withOpacity(`--ab-primary-500`),
          'primary-600': withOpacity(`--ab-primary-600`),
          'primary-700': withOpacity(`--ab-primary-700`),
          'primary-800': withOpacity(`--ab-primary-800`),
          'primary-900': withOpacity(`--ab-primary-900`),
          'primary-1000': withOpacity(`--ab-primary-1000`),

          /* Success Colors */
          'success-100': withOpacity(`--ab-success-100`),
          'success-200': withOpacity(`--ab-success-200`),
          'success-300': withOpacity(`--ab-success-300`),
          'success-400': withOpacity(`--ab-success-400`),
          'success-500': withOpacity(`--ab-success-500`),
          'success-600': withOpacity(`--ab-success-600`),
          'success-700': withOpacity(`--ab-success-700`),
          'success-800': withOpacity(`--ab-success-800`),
          'success-900': withOpacity(`--ab-success-900`),
          'success-1000': withOpacity(`--ab-success-1000`),

          /* Warning Colors */
          'warning-100': withOpacity(`--ab-warning-100`),
          'warning-200': withOpacity(`--ab-warning-200`),
          'warning-300': withOpacity(`--ab-warning-300`),
          'warning-400': withOpacity(`--ab-warning-400`),
          'warning-500': withOpacity(`--ab-warning-500`),
          'warning-600': withOpacity(`--ab-warning-600`),
          'warning-700': withOpacity(`--ab-warning-700`),
          'warning-800': withOpacity(`--ab-warning-800`),
          'warning-900': withOpacity(`--ab-warning-900`),
          'warning-1000': withOpacity(`--ab-warning-1000`),

          /* Error Colors */
          'error-100': withOpacity(`--ab-error-100`),
          'error-200': withOpacity(`--ab-error-200`),
          'error-300': withOpacity(`--ab-error-300`),
          'error-400': withOpacity(`--ab-error-400`),
          'error-500': withOpacity(`--ab-error-500`),
          'error-600': withOpacity(`--ab-error-600`),
          'error-700': withOpacity(`--ab-error-700`),
          'error-800': withOpacity(`--ab-error-800`),
          'error-900': withOpacity(`--ab-error-900`),
          'error-1000': withOpacity(`--ab-error-1000`),

          /* Support Colors */
          'support-100': withOpacity(`--ab-support-100`),
          'support-200': withOpacity(`--ab-support-200`),
          'support-300': withOpacity(`--ab-support-300`),
          'support-400': withOpacity(`--ab-support-400`),
          'support-500': withOpacity(`--ab-support-500`),
          'support-600': withOpacity(`--ab-support-600`),
          'support-700': withOpacity(`--ab-support-700`),
          'support-800': withOpacity(`--ab-support-800`),
          'support-900': withOpacity(`--ab-support-900`),
          'support-1000': withOpacity(`--ab-support-1000`),

          /* Opacity */
          'opacity-dark-50': withOpacity(`--ab-opacity-dark-50`)({ opacityValue: 0.05 }),
          'opacity-dark-150': withOpacity(`--ab-opacity-dark-150`)({ opacityValue: 0.15 }),
          'opacity-dark-500': withOpacity(`--ab-opacity-dark-500`)({ opacityValue: 0.5 }),
          'opacity-light-50': withOpacity(`--ab-opacity-light-50`)({ opacityValue: 0.05 }),
          'opacity-light-150': withOpacity(`--ab-opacity-light-150`)({ opacityValue: 0.15 }),
          'opacity-light-500': withOpacity(`--ab-opacity-light-500`)({ opacityValue: 0.5 })
        }
      }
    }
  },
  variants: { extends: {} },
  plugins: [tailwindcss, anbanPlugin]
}
