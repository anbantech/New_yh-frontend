export type proListItemType = {
  page: number
  pageSize: number
  keyword: string | null
  sort: 0 | 1 //    0-desc(降序)   1-asc(升序)
}

export interface ProjectListType {
  loading: boolean
  total: number
  projectList: []
  projectListParams: proListItemType
  getProjectListFn: (params: proListItemType) => void
  searchKeyWord: (value: string) => Promise<unknown>
  onChangePage: (page: number, pageSize: number) => void
  projectDetailInfo: ProjectListItem | null
  setProjectDetailInfo: (row: ProjectListItem | null) => void
  projectMemberListId: string[]
  initList: string[]
  deleteMemer: (value: string) => void
  createMemer: () => void
  deleteProjectItem: () => void
  addMemer: (val: string[]) => void
  MemberList: {
    checked: boolean
    department: string
    departmentId: string
    userId: string
    username: string
  }[]
  projectMemberList: {
    checked: boolean
    department: string
    departmentId: string
    userId: string
    username: string
  }[]
  createProjectFn: (params: {
    description?: string
    projectName: string
    projectType: number
    // projectIdentification: string
    id?: string
  }) => void
  updateProjectFn: (params: {
    description?: string
    projectName: string
    projectType: number
    // projectIdentification: string
    id?: string
  }) => void
  getMember: () => Promise<unknown>
}

export interface ProjectListItem {
  bugNums: number
  canBeOperated: boolean
  collaboratorNums: number
  createAt: string
  createBy: null
  description: string
  engines: null
  id: string
  isCreateHarness: string
  organizationId: null
  projectIdentification: string
  projectName: string
  projectType: number
  runningInstance: number
  sanitizers: null
  sourceCodePackageFileId: string
  totalInstance: number
  unRepairBug: number
  yzId: number
}

export interface ProjectModalType {
  projectModalStatus: boolean
  setModalStatus: () => void
  openMengent: boolean
  closeMengent: () => void
  setOpenMengent: (row: ProjectListItem | null) => void
  deleteModalStatus: boolean
  setDeleteModalStatus: () => void
}
