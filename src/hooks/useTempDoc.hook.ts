import { TempDoc } from '@/types'
import { useEffect, useState } from 'react'
import { getLocal, addLocal, TEMP_DOCS_KEY } from '@/utils'

export function useTempDocs(init = getLocal(TEMP_DOCS_KEY) as TempDoc[]) {
  const [tempDocs, setTempDocs] = useState<TempDoc[]>(init || [])

  useEffect(() => {
    if (tempDocs instanceof Array) {
      addLocal(TEMP_DOCS_KEY, tempDocs)
    }
  }, [tempDocs])

  return {
    tempDocs,
    setTempDocs,
  }
}
