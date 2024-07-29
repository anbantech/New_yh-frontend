import type { PaginationProps, TableProps } from 'antd'
import { ConfigProvider, Empty, Pagination, Table } from 'antd'
import React, { useCallback, useMemo, useRef } from 'react'

import { usePaginationStyle } from '@/styleSheet/pagination/pagination'
import { useTableStyle } from '@/styleSheet/table/table'
import { useResizeObserver } from '@/utils/hooks/useResizeObserver'

function findFitCountInPageSizeOptions(
  pagination: PaginationProps | false | undefined,
  fitCount: number
) {
  if (pagination && pagination.pageSizeOptions) {
    const _pageSizeOptions = pagination.pageSizeOptions.map(v => +v)
    /**
     * Find a page size that is greater than or equal to the fit count,
     * if not found, return the maximum value.
     */
    return _pageSizeOptions.find(pageSize => pageSize >= fitCount) || Math.max(..._pageSizeOptions)
  } else {
    return fitCount
  }
}

interface AbTableProps<T = any> extends TableProps<T> {
  /**
   * Table id, used to query selector.
   */
  id: string
  /**
   * Pagination props.
   */
  pagination?: PaginationProps | false
}

const AbTable: React.FC<AbTableProps> = ({
  dataSource = [],
  id,
  pagination = false,
  size = 'small',
  ...restTableProps
}) => {
  const { pg } = usePaginationStyle().styles
  const { table } = useTableStyle().styles
  const singleLineHeight = useMemo(() => (size === 'small' ? 33 : 47), [size])

  /**
   * Table body height.
   */
  const [tableBodyHeight, setTableBodyHeight] = React.useState(0)
  const lastTableBodyHeight = useRef<number>(0)

  const observerCallback = useCallback(
    (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { height } = entry.contentRect
        /**
         * To subtract header height and pager height.
         */
        const heightOffset = singleLineHeight + (!pagination || pagination.total === 0 ? 0 : 65)
        const bodyHeight = Math.floor(height - heightOffset)
        setTableBodyHeight(bodyHeight)

        /**
         * To compare the last height and current height,
         * if height not changed, skip "pagination.onChange" callback.
         */
        if (bodyHeight === lastTableBodyHeight.current) return
        lastTableBodyHeight.current = bodyHeight
        /**
         * To calculate the preferred page size, and try to trigger onChange event.
         */
        const fitCount = findFitCountInPageSizeOptions(
          pagination,
          Math.ceil(bodyHeight / (singleLineHeight * 10)) * 10
        )
        if (pagination && pagination.pageSize !== fitCount) {
          pagination.onChange?.(pagination.current!, fitCount)
        }
      }
    },
    [pagination, singleLineHeight]
  )

  useResizeObserver(`#${id}`, observerCallback)

  /**
   * If dataSource height is greater than tableBodyHeight, set scroll to y.
   * Otherwise, hide the scroll.
   */
  const tableScrollOptions = useMemo(
    () =>
      dataSource.length * singleLineHeight > tableBodyHeight
        ? { y: tableBodyHeight - 10, x: true as const }
        : undefined,
    [dataSource.length, singleLineHeight, tableBodyHeight]
  )

  return (
    <div className='bg-skin-neutral-light h-full flex flex-col justify-between' id={id}>
      <ConfigProvider
        renderEmpty={() => (
          <div style={{ height: `${tableBodyHeight - 23}px`, display: 'flex', overflow: 'hidden' }}>
            <div style={{ margin: 'auto' }}>
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
          </div>
        )}
      >
        <Table
          className={table}
          size={size}
          pagination={false}
          scroll={tableScrollOptions}
          dataSource={dataSource}
          {...restTableProps}
        />
      </ConfigProvider>
      {pagination && !!pagination.total && (
        <div className='border-t border-solid border-skin-border-100 p-[16px] bg-skin-neutral-light'>
          <Pagination
            className={pg}
            simple
            pageSizeOptions={[10, 20, 30, 40, 50]}
            showTotal={total => `共 ${total} 条`}
            {...pagination}
          />
        </div>
      )}
    </div>
  )
}

export default AbTable
