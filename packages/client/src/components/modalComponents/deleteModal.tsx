import { IconExclamationCircle } from '@anban/iconfonts'
import { Button, Modal } from 'antd'
import React from 'react'

import { projectConfigStore } from '@/store/projectStore/projectStore'
import { deleteModalStyle } from '@/styleSheet/modal/modal'

type DeleteModalType = {
  content: string
  onCancel: () => void
  onOk: () => void
}

const DeleteModal: React.FC<DeleteModalType> = (props: DeleteModalType) => {
  const { styles } = deleteModalStyle()
  const { content, onCancel, onOk } = props

  const deleteModalStatus = projectConfigStore(state => state.deleteModalStatus)
  return (
    <Modal
      title={
        <div className='flex items-center'>
          <IconExclamationCircle className='w-[18px] h-[18px] mr-2' />
          <span>删除确认</span>
        </div>
      }
      className={styles.createTaskModal}
      footer={
        <>
          <Button className='text-[#333333] rounded-sm' onClick={onCancel}>
            {' '}
            取消
          </Button>
          <Button
            className='w-[72px] h-[32px]  text-[#ffffff]   bg-primary-600  rounded-sm  '
            type='primary'
            onClick={onOk}
          >
            删除
          </Button>
        </>
      }
      open={deleteModalStatus}
      onCancel={onCancel}
    >
      <span>{content}</span>
    </Modal>
  )
}

export default DeleteModal
