import { createStyles } from 'antd-style'
export const useStylePagination = createStyles(({ css }) => ({
  paginationStyle: css`
    .ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
      background: rgba(var(--ab-neutral-light));
      border: 1px solid rgba(var(--ab-border-300));
    }
    .ant-select-selection-item {
      color: rgba(var(--ab-text-700));
    }
    .ant-select-dropdown {
      background: rgba(var(--ab-neutral-light));
    }
    .ant-select-item {
      color: rgba(var(--ab-text-700));
    }
  `
}))
