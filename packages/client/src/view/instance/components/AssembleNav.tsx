import { PlusOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'

import IconButton from '@/components/buttonComponents/iconButton'
import LanguagetagTag from '@/layout/components/languagetag/languagetag'

const buttonStyle = classNames(
  'w-[124px]',
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

function AssembleNav() {
  const matches = useLocation()
  const { state } = matches
  return (
    <div className='h-[68px] w-full  flex items-center justify-between'>
      <div className='py-[6px]'>
        <span className='h-[32px] block text-base mr-[16px] leading-[32px] font-bold text-skin-text-700'>
          {' '}
          {state.projectName}
        </span>
        <div className='flex h-[24px] items-center'>
          <LanguagetagTag type={state.projectType} />
          <div className='text-xs font-normal flex items-center h-[20px] ml-[10px]'>
            {' '}
            {` 项目描述:${state.description || '暂无描述'}`} | {` 创建时间:${state.createAt}`}{' '}
          </div>
        </div>
      </div>
      <IconButton
        name='新建测试实例'
        onClick={() => {}}
        Icon={PlusOutlined}
        IconStyle={IconStyle}
        ButtonStyle={buttonStyle}
      />
    </div>
  )
}

export default AssembleNav
