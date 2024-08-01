import { IconAdd } from '@anban/iconfonts'
import { Button } from 'antd'
import React from 'react'

import result from '@/assets/result.svg'

type ResultType = {
  title?: string
  describe?: string
  buttonName?: string
  isNeedImage?: boolean
  isNeedTitle?: boolean
  isNeedDescribe?: boolean
  isNeedButton?: boolean
  onclick?: () => void
}

const ResultComponents: React.FC<ResultType> = ({
  title,
  onclick,
  describe,
  buttonName,
  isNeedDescribe = true,
  isNeedImage = true,
  isNeedTitle = true,
  isNeedButton = true
}: ResultType) => {
  return (
    <div className='w-full flex flex-col items-center transform -translate-y-[-90%]'>
      {isNeedImage && <img src={result} alt='' className='w-[100px] h-[100px]' />}
      {isNeedTitle && (
        <span className='text-skin-text-700 text-base font-bold'>{`${title}为空`}</span>
      )}
      {isNeedDescribe && (
        <span className='text-skin-text-500 text-sm font-normal mt-[4px]'>{describe} </span>
      )}
      {isNeedButton && (
        <Button
          icon={<IconAdd />}
          type='primary'
          className='bg-skin-primary-600 flex items-center mt-[32px]'
          onClick={onclick}
        >
          {buttonName}
        </Button>
      )}
    </div>
  )
}

export default ResultComponents
