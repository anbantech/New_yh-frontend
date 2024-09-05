export interface InstanceStoreType {
  bugChartInfo: null
  bugPieChart: null | unknown[]
  innerMainBugInfo: []
  OuterRingMainBugInfo: []
  // 获取项目BUG概览
  getBugInfo: (id: string) => Promise<unknown>
}
