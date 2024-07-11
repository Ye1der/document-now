/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_AUTH_URL: string
  readonly VITE_GITHUB_APP_ID: string
  readonly VITE_GITHUB_CLIENT_ID: string
  readonly VITE_SERVER_API: string
}

interface ImportMetaEnv {
  readonly env: ImportMetaEnv
}
