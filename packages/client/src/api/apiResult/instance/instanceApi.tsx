import request from '@/api/server'

/**
 * 项目bug概览
 */
export function getProjectBugsInfo(params: { id: string }) {
  return request.get(`/yh/project/generalView/${params.id}`)
}
