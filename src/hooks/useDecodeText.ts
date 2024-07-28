import { useEffect, useState } from 'react'

export function useDecodeText(text: string) {
  const [decodedText, setDecodedText] = useState('')

  const decode = (text: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        const binary = atob(text)
        const bytes = new Uint8Array(binary.length)

        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i)
        }

        const decodedText = new TextDecoder('utf-8').decode(bytes)
        console.log(decodedText)
        resolve(decodedText)
      } catch (err) {
        reject(err)
      }
    })
  }

  useEffect(() => {
    if (window !== undefined && typeof text === 'string' && text.length > 0) {
      decode(text)
        .then((decoded) => {
          setDecodedText(decoded)
        })
        .catch((err) => {
          throw new Error(err)
        })
    }
  }, [text])

  return {
    decodedText,
  }
}
