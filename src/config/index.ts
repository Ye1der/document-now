type Config = {
  githubAuthUrl: string
  githubClientId: string
  githubAppId: string
  api: string
}

export const config: Config = {
  githubAuthUrl: import.meta.env.VITE_GITHUB_AUTH_URL || '',
  githubClientId: import.meta.env.VITE_GITHUB_CLIENT_ID || '',
  githubAppId: import.meta.env.VITE_GITHUB_APP_ID || '',
  api: import.meta.env.VITE_SERVER_API || '',
}
