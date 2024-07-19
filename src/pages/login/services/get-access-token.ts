import { config } from "@/config"
import { TokenResponse } from "../models/token-response"

export async function getAccessToken(code: string) {
  const baseApi = config.api

  try {
    const response = await fetch(`${baseApi}/github/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })

    const data = await response.json()

    console.log({
      customMessage: "response back",
      ...data,
    })

    return data as TokenResponse
  } catch (err) {
    throw new Error("There was a problem to get token")
  }
}
