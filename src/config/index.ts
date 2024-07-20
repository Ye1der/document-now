type Config = {
  api: string
}

export const config: Config = {
  api: import.meta.env.VITE_SERVER_API || '',
}
