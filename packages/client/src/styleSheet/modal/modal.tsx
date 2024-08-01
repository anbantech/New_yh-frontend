//  模态框样式设置
import { createStyles } from 'antd-style'

export const useStyle = createStyles(({ css }) => ({
  createTaskModal: css`
    .ant-modal-header {
      padding: 12px 16px;
      margin: 0;
      font-size: 16px;
      font-weight: 700px;
      color: #333;
      border-bottom: 1px solid #f0f0f0;
    }
    ,
    .ant-modal-close {
      top: 13px;
      color: #333333;
    }

    .ant-modal-body {
      padding: 24px;
    }

    .ant-modal-footer {
      margin: 0;
      padding: 12px 24px;
      border-top: 1px solid #f0f0f0;
    }
  `,

  memberManage: css`
    .ant-modal-header {
      padding: 12px 16px;
      margin: 0;
      font-size: 16px;
      font-weight: 700px;
      color: #333;
      border-bottom: 1px solid #f0f0f0;
    }
    ,
    .ant-modal-close {
      top: 13px;
      color: #333333;
    }
    .ant-modal-footer {
      margin: 0;
      padding: 12px 24px;
      border-top: 1px solid #f0f0f0;
    }
  `
}))

export const deleteModalStyle = createStyles(({ css }) => ({
  createTaskModal: css`
    .ant-modal-header {
      padding: 12px 16px;
      margin: 0;
      font-size: 16px;
      font-weight: 700px;
      color: #333;
      border-bottom: none;
    }
    ,
    .ant-modal-close {
      top: 13px;
      color: #333333;
    }

    .ant-modal-body {
      padding: 0 0 12px 42px;
    }

    .ant-modal-footer {
      margin: 0;
      padding: 12px 24px;
      border-top: 1px solid #f0f0f0;
    }
  `
}))
