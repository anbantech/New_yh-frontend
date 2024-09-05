import { PlusOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { useEffect } from 'react'

import IconButton from '@/components/buttonComponents/iconButton'
import AnBanInput from '@/components/inputComponents/anbanSearchInput'
import DeleteModal from '@/components/modalComponents/deleteModal'
import MengentModal from '@/components/modalComponents/mengent/mengent'
import ProjectModal from '@/components/modalComponents/projectModal'
import NavHeader from '@/layout/components/baseComponent'
import { projectConfigStore, projectStore } from '@/store/projectStore/projectStore'

import ProjectTable from './components/projectTable'
// 样式
const className = classNames('w-[200px]', 'h-[32px]')
const buttonStyle = classNames(
  'w-[104px]',
  'h-[32px]',
  'flex',
  'p-[0px]',
  'text-[#ffffff]',
  'text-[14px]',
  'font-normal',
  'items-center',
  'bg-primary-600',
  'ml-[24px]',
  'rounded-sm'
)
const IconStyle = classNames('w-[16px]', 'h-[16px]')

// 组装头部组件

const AssembleNav = () => {
  const { setModalStatus } = projectConfigStore()
  return (
    <div className='w-full h-[48px] flex items-center justify-between'>
      <span className='h-[24px] block text-base mr-[16px] font-bold text-skin-text-700'>
        {' '}
        项目列表
      </span>
      <IconButton
        name='新建任务'
        onClick={setModalStatus}
        Icon={PlusOutlined}
        IconStyle={IconStyle}
        ButtonStyle={buttonStyle}
      />
    </div>
  )
}

// 组件
const Projects = () => {
  const {
    getProjectListFn,
    projectListParams,
    searchKeyWord,
    projectDetailInfo,
    deleteProjectItem
  } = projectStore()

  const { setDeleteModalStatus } = projectConfigStore()
  const projectModalStatus = projectConfigStore(state => state.projectModalStatus)
  const deleteModalStatus = projectConfigStore(state => state.deleteModalStatus)
  const onOk = () => {
    deleteProjectItem()
    setDeleteModalStatus()
  }
  useEffect(() => {
    getProjectListFn(projectListParams)
  }, [])

  return (
    <>
      <NavHeader>
        {' '}
        <AssembleNav />
      </NavHeader>
      <div className='flex-1 my-4 mx-6 flex  flex-col gap-[16px] overflow-hidden h-[calc(100vh-148px)] bg-skin-background-200'>
        <AnBanInput placeholder='请输入任务名称' className={className} setKeyWord={searchKeyWord} />
        <ProjectTable />
      </div>
      {projectModalStatus && <ProjectModal />}
      {deleteModalStatus && (
        <DeleteModal
          content={`是否要删除项目${projectDetailInfo?.projectName}? 项目删除后将无法恢复`}
          onOk={onOk}
          onCancel={setDeleteModalStatus}
        />
      )}
      <MengentModal />
    </>
  )
}

export default Projects
