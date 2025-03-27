export interface IDocumentation {
  id: number
  commit: string
  content: string
  repoName: string
  userId: number
  ids: string[]
  close?: boolean
}
