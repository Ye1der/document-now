import { config } from '@/config'
import { TokenResponse } from '../models/token-response'

export async function getAccessToken(code: string) {
  const baseApi = config.api

  const response = await fetch(`${baseApi}/github/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  })

  const data = await response.json()

  if (data?.statusCode !== 200) {
    throw new Error(data?.message)
  }

  return data as TokenResponse
}
