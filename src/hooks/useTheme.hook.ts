import { useEffect } from 'react'
import { addLocal, getLocal } from '@/utils'
import { useGlobalContext } from '@/context/globalContext'

export function useTheme() {
  const { theme, setTheme } = useGlobalContext()

  useEffect(() => {
    const localTheme = getLocal('theme')

    if (localTheme !== theme) {
      addLocal('theme', theme)
    }
  }, [theme])
  return {
    setTheme,
    theme,
  }
}
