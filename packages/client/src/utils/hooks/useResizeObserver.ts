import { debounce, isNullable } from '@anban/frontend-utils'
import { useLayoutEffect } from 'react'

export function useResizeObserver(elementId: string, fn: (entries: ResizeObserverEntry[]) => void) {
  const observerCallback = debounce(fn, 100)

  useLayoutEffect(() => {
    const element = document.querySelector(elementId)

    if (isNullable(elementId) || isNullable(element)) {
      throw new Error(`Element of ${elementId} not found.`)
    }

    const observer = new ResizeObserver(observerCallback)
    observer.observe(element)

    return () => {
      observerCallback.cancel()
      observer.unobserve(element)
    }
  }, [elementId, observerCallback])
}
