import request from '@/api/server'
import { proListItemType } from '@/store/projectStore/projectStoreType'

/**
 * 项目列表
 */
export function getProjectList(params: proListItemType) {
  const { keyword, page, pageSize, sort } = params
  return request.get(
    `/yh/project/search?keyword=${keyword}&page=${page}&pageSize=${pageSize}&sort=${sort}`
  )
}

/**
 * 创建项目
 */
export function createProject(params: {
  description?: string
  projectName: string
  projectType: number
  id?: string
  // projectIdentification: string
}) {
  return request.post<null>('/yh/project/create', params)
}

/**
 * 更新项目
 */
export function updateProject(params: {
  description?: string
  projectName: string
  id?: string
  projectType: number
  // projectIdentification: string
}) {
  return request.post<null>('/yh/project/update', params)
}

/**
 * 删除项目
 */

/**
 * 删除项目
 */
export function deleteProject(params: { projectId: string; projectName: string }) {
  return request.delete('/yh/project/delete', {
    data: params
  })
}

/**
 * 获取成员树
 */
export function collaboratorList(params: { projectId: string; name?: string | null }) {
  return request.get(
    `/yh/collaborator/list?projectId=${params.projectId}&name=${params.name ? params.name : ''}`
  )
}

/**
 * 添加成员
 */
export function collaboratorAdd(params: { projectId: string; userId: string[] }) {
  return request.post<null>('/yh/collaborator/add', params)
}
/**
 * 删除成员
 */
export function collaboratorDelete(params: { projectId: string; userId: string[] }) {
  return request.delete<null>('/yh/collaborator/delete', { data: params })
}

/**
 * 添加成员管理删除调用词接口
 *
 */

export function memberManage(params: {
  addCollaboratorParam: {
    projectId: string
    userId: string[]
  }
  deleteCollaboratorParam: {
    projectId: string
    userId: string[]
  }
  projectId: string
}) {
  return request.post('/yh/collaborator/operate', params)
}
