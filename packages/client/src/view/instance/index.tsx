import CardComponents from '@/components/cardComponents/card'
import RoundChart from '@/components/echart/round'
import NavHeader from '@/layout/components/baseComponent'

import AssembleNav from './components/AssembleNav'

// 组件
const InstanceIndex = () => {
  return (
    <div className='flex-1'>
      <NavHeader>
        <AssembleNav />
      </NavHeader>
      <div className='W-[100%]'>
        <CardComponents className='h-[150px] w-[30%]'>
          {' '}
          <RoundChart />
        </CardComponents>
      </div>
    </div>
  )
}

export default InstanceIndex
