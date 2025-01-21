import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import { addLocal, getLocal } from '@/utils'
import { getUser } from './getUser'

interface Props {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: Props) {
  const [isValidate, setValidate] = useState(false)
  const [, setLocation] = useLocation()

  const redirect = () => setLocation('/')

  const validToken = async (tokenParam: string) => {
    if (tokenParam) {
      try {
        const user = await getUser(tokenParam)
        if (!user) redirect()
        setValidate(true)
      } catch (err) {
        redirect()
      }
    } else redirect()
  }

  useEffect(() => {
    const url = new URL(window.location.href)
    const queryParams = url.searchParams
    let token = queryParams.get('token')

    token ? addLocal('token', token) : (token = getLocal('token'))
    token ? validToken(token as string) : redirect()
  }, [])

  if (isValidate) {
    return children
  }

  return (
    <section className="h-screen w-screen bg-customBlueUltraBlack"></section>
  )
}
