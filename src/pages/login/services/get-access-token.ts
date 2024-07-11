import { config } from '@/config'
import { TokenResponse } from '../models/token-response'

export async function getAccessToken(code: string) {
  try {
    const baseApi = config.api

    const response = await fetch(`${baseApi}/github/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })

    const data = await response.json()

    return data as TokenResponse
  } catch (err) {
    console.log(err)
  }
}
