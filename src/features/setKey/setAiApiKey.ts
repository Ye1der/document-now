import { getLocal } from '@/utils'
import { toast } from 'sonner'

export async function setAiApiKey(key: string) {
  const token = getLocal('token')
  const body = {
    key: key,
    model: 'Mistral',
  }

  try {
    const response = await fetch('http://localhost:3000/api/v1/ai/setKey', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      if (response.status == 400) {
        toast.error('The API Key is invalid')
      } else if (response.status == 409) {
        toast.warning('You already have a valid API Key configured')
      } else {
        toast.error('There was an error in the server')
      }
      return
    }

    toast.success('Your API Key has been successfully inserted')
  } catch (err) {
    toast.error('Error to insert the API Key')
  }
}
