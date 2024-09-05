import { RowProps, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

import LinkButton from '@/components/buttonComponents/linkButton'
import ResultComponents from '@/components/resultComponents/result'
import AbTable from '@/components/tableComponents/AbTable'
import { ProjectIcon } from '@/store/globalStore/globalStore'
import { InstanceStore } from '@/store/instanceStore/instanceStore'
import { projectConfigStore, projectStore } from '@/store/projectStore/projectStore'
import { ProjectListItem } from '@/store/projectStore/projectStoreType'

const ProjectTable = () => {
  const navigate = useNavigate()

  const { projectList, projectListParams, onChangePage, total, setProjectDetailInfo } =
    projectStore()

  const { setModalStatus, setDeleteModalStatus, setOpenMengent } = projectConfigStore()

  // 获取bugInfo信息

  const { getBugInfo } = InstanceStore()
  // 更新 删除 调用此方法
  const updateOrDelete = (row: ProjectListItem, isUpdate: boolean) => {
    setProjectDetailInfo(row)
    if (isUpdate) {
      setModalStatus()
    } else {
      setDeleteModalStatus()
    }
  }

  // 项目详情
  const intoInstance = (row: ProjectListItem) => {
    getBugInfo(row.id).then(() => {
      navigate('/project/instance', { state: row })
    })
  }

  const columns = [
    {
      width: 100,
      title: '任务名称',
      dataIndex: 'projectName:',
      key: 'projectName:',
      render: (_: RowProps, row: ProjectListItem) => {
        return (
          <p className='max-w-[450px] flex items-center overflow-hidden whitespace-nowrap text-ellipsis break-keep'>
            {ProjectIcon[row.projectType as keyof typeof ProjectIcon]}
            <Typography.Text ellipsis={{ tooltip: row.projectName }}>
              <LinkButton
                onClick={() => {
                  intoInstance(row)
                }}
              >
                {row.projectName}
              </LinkButton>
            </Typography.Text>
          </p>
        )
      },
      ellipsis: true
    },
    {
      width: 100,
      title: '测试中/测试实列总数',
      dataIndex: 'runningInstance',
      key: 'runningInstance',
      render: (_: RowProps, row: ProjectListItem) => {
        return (
          <p className='max-w-[450px] overflow-hidden whitespace-nowrap text-ellipsis break-keep'>
            {`${row.runningInstance || 0} / ${row.totalInstance || 0}`}
          </p>
        )
      },
      ellipsis: true
    },

    {
      width: 100,
      title: '未修复BUG/BUG总数',
      dataIndex: 'unRepairBug',
      key: 'unRepairBug:',
      render: (_: RowProps, row: ProjectListItem) => {
        return (
          <p className='max-w-[450px] overflow-hidden whitespace-nowrap text-ellipsis break-keep'>
            {`${row.unRepairBug || 0} / ${row.bugNums || 0}`}
          </p>
        )
      },
      ellipsis: true
    },
    {
      width: 100,
      title: '创建时间',
      dataIndex: 'createAt:',
      key: 'createAt:',
      render: (_: RowProps, row: ProjectListItem) => {
        return <span> {row.createAt}</span>
      },
      ellipsis: true
    },
    {
      width: 100,
      title: () => {
        return <span style={{ display: 'block', width: '100%', textAlign: 'right' }}>操作</span>
      },
      dataIndex: 'projectName:',
      key: 'projectName:',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render: (_: RowProps, row: ProjectListItem) => {
        return (
          <div className='flex justify-end'>
            <LinkButton
              onClick={() => {
                updateOrDelete(row, false)
              }}
            >
              删除
            </LinkButton>
            <LinkButton
              className='mx-3'
              onClick={() => {
                updateOrDelete(row, true)
              }}
            >
              编辑
            </LinkButton>
            {row.canBeOperated && (
              <LinkButton
                onClick={() => {
                  setOpenMengent(row)
                }}
              >{`成员管理(${row.collaboratorNums || 0})`}</LinkButton>
            )}
          </div>
        )
      },
      ellipsis: true
    }
  ]
  return (
    <div className='w-full h-full overflow-hidden'>
      {projectList ? (
        <AbTable
          rowKey='id'
          id='project-list'
          size='large'
          columns={columns}
          dataSource={projectList}
          pagination={{
            total,
            current: projectListParams.page,
            pageSize: projectListParams.pageSize,
            onChange: onChangePage,
            showSizeChanger: true
          }}
        />
      ) : (
        <ResultComponents
          title='项目列表'
          describe='请点击下面按钮项目'
          buttonName='新建项目'
          onclick={setModalStatus}
        />
      )}
    </div>
  )
}

export default ProjectTable
