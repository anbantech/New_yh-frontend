import { useVirtualList } from 'ahooks'
import { Button, Checkbox, Modal } from 'antd'
import React, { useRef } from 'react'

import LinkButton from '@/components/buttonComponents/linkButton'
import { projectConfigStore, projectStore } from '@/store/projectStore/projectStore'
// import NormalRules from '@/utils/rules/normalRules'
import { borderBottom_100, borderLeft_100 } from '@/styleSheet/border/borderTailwind'
import { useStyle } from '@/styleSheet/modal/modal'

const MengentModal: React.FC = () => {
  const { styles } = useStyle()
  const { MemberList, projectMemberList, projectMemberListId, addMemer, createMemer, deleteMemer } =
    projectStore()
  const { openMengent, closeMengent } = projectConfigStore()

  const containerRef = useRef(null)
  const containerRefR = useRef(null)
  const rightRef = useRef(null)
  const leftRef = useRef(null)

  const [list] = useVirtualList(projectMemberList, {
    containerTarget: containerRefR,
    wrapperTarget: rightRef,
    itemHeight: 48,
    overscan: 10
  })

  const [leftlist] = useVirtualList(MemberList, {
    containerTarget: containerRef,
    wrapperTarget: leftRef,
    itemHeight: 30,
    overscan: 10
  })

  const onChange = (value: string[]) => {
    addMemer(value)
  }
  return (
    <Modal
      title='成员管理'
      className={styles.memberManage}
      footer={
        <>
          <Button className='text-[#333333] rounded-sm' onClick={closeMengent}>
            取消
          </Button>
          <Button
            className='w-[72px] h-[32px]  text-[#ffffff]   bg-primary-600  rounded-sm  '
            type='primary'
            onClick={createMemer}
          >
            确定
          </Button>
        </>
      }
      open={openMengent}
      onCancel={closeMengent}
    >
      <div className='flex h-full'>
        <div className='flex flex-col w-[40%]'>
          <p className='h-[32px] bg-skin-neutral-200 leading-8 pl-[16px] text-xs font-bold'>
            全部成员
          </p>
          <div className=' h-[270px] pl-[16px] overflow-auto' ref={containerRef}>
            <div ref={leftRef}>
              <Checkbox.Group
                className='flex flex-col'
                style={{ width: '100%' }}
                onChange={onChange}
                value={projectMemberListId}
              >
                {leftlist.map(item => {
                  return (
                    <div key={item.data.userId} className='h-[30px]'>
                      <Checkbox className='mt-[5px]' value={item.data.userId}>
                        {item.data.username}
                      </Checkbox>
                    </div>
                  )
                })}
              </Checkbox.Group>
            </div>
          </div>
        </div>
        <div className={`flex flex-col w-[60%] h-[full] ${borderLeft_100.join(' ')}`}>
          <p className='h-[32px] bg-skin-neutral-200 leading-8 pl-[16px] text-xs font-bold'>
            项目成员
          </p>
          <div className=' h-[270px] pl-[16px] overflow-auto' ref={containerRefR}>
            <div ref={rightRef}>
              {list.map(item => {
                return (
                  <div
                    key={item.data.userId}
                    className={`h-[48px] leading-[48px] flex flex-row justify-between pl-[16px] pr-[16px] ${borderBottom_100.join(' ')}`}
                  >
                    <span>{item.data.username}</span>
                    <LinkButton
                      onClick={() => {
                        deleteMemer(item.data.userId)
                      }}
                    >
                      删除
                    </LinkButton>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default MengentModal
