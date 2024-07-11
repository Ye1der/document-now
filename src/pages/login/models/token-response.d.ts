export interface TokenResponse {
  message: string
  data: DataError & DataSuccess
}

type DataError = {
  error: string
  error_description: string
  error_uri: string
}

type TokenExpires = {
  expires_in: number
  refresh_token: string
  refresh_token_expires_in: number
}

type DataSuccess = {
  access_token: string
  token_type: string
  scope: string
}
