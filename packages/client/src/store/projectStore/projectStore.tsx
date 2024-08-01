import { message } from 'antd'
import { create } from 'zustand'

import {
  collaboratorList,
  createProject,
  deleteProject,
  getProjectList,
  memberManage
} from '@/api/apiResult/project/projectApi'

import { updateProject } from '../../api/apiResult/project/projectApi'
import { ProjectListItem, ProjectListType, ProjectModalType } from './projectStoreType'

export const projectStore = create<ProjectListType>((set, get) => ({
  loading: false,

  // 数据总数量
  total: 0,

  // 项目列表
  projectList: [],

  // 项目详情信息
  projectDetailInfo: null,

  // 设置项目详情信息

  setProjectDetailInfo: row => {
    set({ projectDetailInfo: row })
  },

  // 全部成员列表
  MemberList: [],

  // 项目成员列表
  projectMemberList: [],

  // 初始化列表
  initList: [],

  // 选中的用户
  projectMemberListId: [],

  // 获取项目列表参数
  projectListParams: {
    page: 1,
    pageSize: 10,
    keyword: '',
    sort: 0 //    0-desc(降序)   1-asc(升序)
  },

  // 更新关键字查询
  searchKeyWord: async value => {
    const newParams = { ...get().projectListParams, keyword: value }
    set({ projectListParams: newParams })
    const res = await get().getProjectListFn(newParams)
    return res
  },

  // 分页
  onChangePage: async (page, pageSize) => {
    const newParams = { ...get().projectListParams, page, pageSize }
    set({ projectListParams: newParams })
    const res = await get().getProjectListFn(newParams)
    return res
  },

  // 获取项目项目列表
  getProjectListFn: async params => {
    try {
      const res = await getProjectList(params)
      if (res.data) {
        set({ projectList: res.data.list })
        set({ total: res.data.total })
      }
      return res
    } catch (error) {
      message.error((error as { message: string }).message)
    }
  },

  // 创建项目
  createProjectFn: async params => {
    const { projectListParams } = get()
    try {
      const res = await createProject(params)
      if (res) {
        get().getProjectListFn(projectListParams)
      }
    } catch (error) {
      message.error((error as { message: string }).message)
    }
  },

  //更新项目
  updateProjectFn: async params => {
    const { projectListParams } = get()
    try {
      const res = await updateProject(params)
      if (res) {
        get().getProjectListFn(projectListParams)
      }
    } catch (error) {
      message.error((error as { message: string }).message)
    }
  },
  // 删除项目
  deleteProjectItem: async () => {
    const { projectDetailInfo, projectListParams } = get()
    if (!projectDetailInfo) return
    try {
      const { id, projectName } = projectDetailInfo

      if (!id) return
      const res = await deleteProject({ projectId: id, projectName })
      if (res) {
        get().getProjectListFn(projectListParams)
        message.success('删除成功')
        set({ projectDetailInfo: null })
      }
    } catch {
      message.success('删除失败')
      /* empty */
    }
  },

  // 获取成员
  getMember: async () => {
    const res = await collaboratorList({
      projectId: get().projectDetailInfo?.id as string
    })
    set({ projectMemberList: res.data.filter((item: { checked: boolean }) => item.checked) })
    set({
      projectMemberListId: res.data
        .filter((item: { checked: boolean }) => item.checked)
        .map((item: { userId: string }) => {
          return item.userId
        })
    })
    set({
      initList: res.data
        .filter((item: { checked: boolean }) => item.checked)
        .map((item: { userId: string }) => {
          return item.userId
        })
    })
    set({ MemberList: res.data })
    return res
  },

  // 增加成员
  addMemer: (val: string[]) => {
    const data = get().MemberList.filter((item: { userId: string }) => val.includes(item.userId))
    set({ projectMemberList: data })

    set({
      projectMemberListId: data.map((item: { userId: string }) => {
        return item.userId
      })
    })
  },
  // 创建人员
  createMemer: async () => {
    const { projectListParams } = get()
    const add = get().projectMemberListId.filter(item => !get().initList.includes(item))
    const increase = get().initList.filter(item => !get().projectMemberListId.includes(item))
    const params = {
      addCollaboratorParam: {
        projectId: get().projectDetailInfo?.id as string,
        userId: add
      },
      deleteCollaboratorParam: {
        projectId: get().projectDetailInfo?.id as string,
        userId: increase
      },
      projectId: get().projectDetailInfo?.id as string
    }
    const res = await memberManage(params)
    if (res) {
      get().getProjectListFn(projectListParams)
      projectConfigStore.getState().closeMengent()
    }
  },
  // 删除item
  deleteMemer: (value: string) => {
    const data = get().projectMemberList.filter((item: { userId: string }) => value !== item.userId)
    set({ projectMemberList: data })
    set({
      projectMemberListId: data.map((item: { userId: string }) => {
        return item.userId
      })
    })
  }
}))

const { getMember, setProjectDetailInfo } = projectStore.getState()
/*
 ** ----------------------------------------  仓库 分界 ------------------------------------------
 */

// 项目配置仓库
export const projectConfigStore = create<ProjectModalType>((set, get) => ({
  // 创建 更新 modal窗状态
  projectModalStatus: false,
  // 删除
  deleteModalStatus: false,
  // 打开成员管理信息
  openMengent: false,
  // 设置modal窗状态
  setModalStatus: () => {
    set({ projectModalStatus: !get().projectModalStatus })
  },
  // 删除modal窗装填
  setDeleteModalStatus: () => {
    set({ deleteModalStatus: !get().deleteModalStatus })
  },
  closeMengent: () => {
    set({ openMengent: !get().openMengent })
  },
  // 成员管理
  setOpenMengent: (row: ProjectListItem | null) => {
    setProjectDetailInfo(row)
    getMember().then(() => {
      set({ openMengent: !get().openMengent })
    })
  }
}))
