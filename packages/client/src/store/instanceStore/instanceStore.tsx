import * as echarts from 'echarts'
import { create } from 'zustand'

import { getProjectBugsInfo } from '@/api/apiResult/instance/instanceApi'

import { InstanceStoreType } from './instanceStoreType'

const InnerRing = [
  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: 'rgba(77, 161, 255, 0.2)' },
      { offset: 0.9, color: 'rgba(77, 255, 223, 0.2)' }
    ])
  },

  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: 'rgba(138, 255, 108, 0.2)' },
      { offset: 0.9, color: 'rgba(2, 199, 81, 0.2)' }
    ])
  },
  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: 'rgba(117, 23, 248, 0.2)' },
      { offset: 0.9, color: 'rgba(227, 35, 255, 0.2)' }
    ])
  },

  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: 'rgba(255, 125, 5, 0.2)' },
      { offset: 0.9, color: 'rgba(255, 212, 34, 0.2)' }
    ])
  },

  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: 'rgba(77, 161, 255, 0.2)' },
      { offset: 0.9, color: 'rgba(77, 255, 223, 0.2)' }
    ])
  }
]

const OuterRing = [
  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: '#4DA1FF' },
      { offset: 0.9, color: '#4DFFDF' }
    ])
  },
  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: '#8AFF6C' },
      { offset: 0.9, color: '#02C751' }
    ])
  },
  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: '#7517F8' },
      { offset: 0.9, color: '#E323FF' }
    ])
  },
  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: '#FF7D05' },
      { offset: 0.9, color: '#FFD422' }
    ])
  },
  {
    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
      { offset: 0, color: '#4DA1FF' },
      { offset: 0.9, color: '#4DFFDF' }
    ])
  }
]

export const InstanceStore = create<InstanceStoreType>(set => ({
  bugChartInfo: null,
  bugPieChart: [],
  innerMainBugInfo: [],
  OuterRingMainBugInfo: [],
  // 获取项目BUG概览
  getBugInfo: async (id: string) => {
    const res = await getProjectBugsInfo({ id })
    if (res) {
      console.log(res)
      set({ bugChartInfo: res.data })
      const bugChartInfo = res.data.bugTypeInfos
        .sort((a: { bugNums: number }, b: { bugNums: number }) => b.bugNums - a.bugNums)
        .map((item: { bugName: string }) => {
          return {
            ...item,
            bugName:
              item.bugName.length > 28
                ? `${item.bugName.slice(0, 12)}...${item.bugName.slice(item.bugName.length - 13)}`
                : item.bugName,
            fullName: item.bugName
          }
        })

      const mainBugInfo = bugChartInfo.slice(0, 4)

      const otherBugInfo = bugChartInfo.slice(4)
      const otherUnknownIndex = mainBugInfo.findIndex(
        (bug: { name: string }) => bug.name === '其他/未知异常'
      )
      if (otherUnknownIndex > -1 && otherUnknownIndex < mainBugInfo.length - 1) {
        const [unknownBug] = mainBugInfo.splice(otherUnknownIndex, 1)
        mainBugInfo.push(unknownBug)
      }

      // Combine the values of other bugs into '其他'
      console.log(otherBugInfo)
      if (otherBugInfo.length > 0) {
        const otherNum = otherBugInfo.reduce(
          (sum: number, bug: { bugNums: number }) => sum + bug.bugNums,
          0
        )
        mainBugInfo.push({ bugName: '其他', bugNums: otherNum })
      }
      const innerMainBugInfo = mainBugInfo.map(
        (item: { bugNums: number; bugName: string }, index: number) => {
          return { ...item, name: item.bugName, value: item.bugNums, itemStyle: InnerRing[index] }
        }
      )

      const OuterRingMainBugInfo = mainBugInfo.map(
        (item: { bugNums: number; bugName: string }, index: number) => {
          return { ...item, name: item.bugName, value: item.bugNums, itemStyle: OuterRing[index] }
        }
      )
      set({ innerMainBugInfo, OuterRingMainBugInfo })
    }
    return res
  }
}))
