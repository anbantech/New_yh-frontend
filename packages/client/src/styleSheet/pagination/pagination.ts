import { createStyles } from 'antd-style'

export const usePaginationStyle = createStyles(({ css }) => ({
  pg: css`
    display: flex;
    align-items: center;
    background: rgb(var(--ab-neutral-light));

    .ant-pagination-total-text {
      line-height: 32px;
      margin-right: auto;
    }

    &.ant-pagination.ant-pagination-simple {
      .ant-pagination-prev,
      .ant-pagination-simple-pager,
      .ant-pagination-next,
      .ant-pagination-prev .ant-pagination-item-link,
      .ant-pagination-next .ant-pagination-item-link {
        line-height: 32px;
        height: 32px;
      }

      .ant-pagination-simple-pager input {
        width: 64px;
      }

      .ant-pagination-options {
        margin-inline-start: 24px;

        .ant-select {
          width: 124px;
        }
      }
    }
  `
}))
