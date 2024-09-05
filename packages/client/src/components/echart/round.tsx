import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

import pieImage from '@/assets/pie.svg'
import { InstanceStore } from '@/store/instanceStore/instanceStore'

function RoundChart() {
  const { innerMainBugInfo, OuterRingMainBugInfo } = InstanceStore()
  console.log(innerMainBugInfo, OuterRingMainBugInfo)
  const option = {
    tooltip: {
      backgroundColor: '#39404F',
      borderColor: '#39404F',
      padding: [5, 5, 5, 5],
      textStyle: {
        align: 'left',
        fontSize: 14,
        color: '#fff'
      },
      show: true
    },
    legend: {
      show: true,
      x: '40%',
      y: '15', // 可设定图例在左、右、居中
      orient: 'vertical',
      align: 'left',
      icon: 'circle',
      itemHeight: 7,
      textStyle: {
        color: '#000000'
      }
    },
    grid: {
      top: '0%',
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },

    graphic: {
      elements: [
        {
          type: 'image',
          style: {
            image: pieImage,
            width: 50,
            height: 50
          },
          left: '11.7%',
          top: 'middle'
        }
      ]
    },
    series: [
      //内圈阴影
      {
        name: '',
        type: 'pie',
        radius: ['40%', '50%'],
        center: ['20%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        z: 10,
        emphasis: {
          disabled: true,
          scale: false, //不缩放
          scaleSize: 0 //为了防止失效直接设置未0
        },
        data: innerMainBugInfo
      },
      //外圈
      {
        name: '',
        type: 'pie',
        radius: ['50%', '60%'],
        center: ['20%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        z: 11,
        data: OuterRingMainBugInfo
      }
    ]
  }

  const echartRef = useRef(null!)
  useEffect(() => {
    if (!echartRef.current) return
    const initEchart = echarts.init(echartRef.current)
    initEchart.setOption(option)
  }, [option])
  return <div ref={echartRef} className='w-[100%] h-[150px]'></div>
}

export default RoundChart
