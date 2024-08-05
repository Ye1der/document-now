export type DocLang = 'EN' | 'ES'

export interface DocForm {
  title: string
  description: string
  lang: DocLang
}

export interface Documents {
  id: number
  title: string
  repoName: string
  userId: number
}

export interface DocumentsAdapted {
  id: Documents['id']
  title: Documents['title']
  repoName: Documents['repoName']
}

export interface DocumentInterceptor extends DocForm {
  repoName: Documents['repoName']
  owner: string
}
