import { createStyles } from 'antd-style'

export const useStyleTable = createStyles(({ css }) => ({
  tableStyle: css`
    .ant-table-content {
      background-color: rgba(var(--ab-neutral-light)) !important;
    }

    .ant-table-thead > tr > th {
      background-color: transparent;
      color: rgba(var(--ab-text-700));
      border-bottom: 1px solid rgba(var(--ab-border-100));
    }

    .ant-table-tbody > tr > td {
      border-bottom: 1px solid rgba(var(--ab-border-100));
    }

    .ant-table-tbody > .ant-table-row > .ant-table-cell-row-hover {
      background-color: rgba(var(--ab-neutral-100));
    }
  `
}))

export const useTableStyle = createStyles(({ css }) => ({
  table: css`
    .ant-table-placeholder .ant-table-cell {
      border-bottom: 0;
    }
  `
}))
