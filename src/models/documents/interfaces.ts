export type DocLang = 'EN' | 'ES'

export interface IDocForm {
  title: string
  description: string
  lang: DocLang
}

export interface IDocuments {
  id: number
  title: string
  repoName: string
  userId: number
}

export interface IDocumentsAdapted {
  id: IDocuments['id']
  title: IDocuments['title']
  repoName: IDocuments['repoName']
}

export interface DocumentInterceptor extends IDocForm {
  repoName: IDocuments['repoName']
  owner: string
}

export interface ICreateDoc extends IDocForm {
  repoName: IDocuments['repoName']
  owner: string
}

export interface ITempDoc {
  title: string
  repoName: string
  username: string
  loading: boolean
  id?: number
  message?: string
}

export interface IDocumentsRepository {
  getDocs: (token: string) => Promise<IDocumentsAdapted[]>
  getDocContentByReponame: (token: string, repoName: string) => Promise<string>
  createDoc: (token: string, data: ICreateDoc) => Promise<ITempDoc>
  getBlobDoc: (token: string, repoName: string) => Promise<Blob>
  deleteDocument: (token: string, id: number) => Promise<IDocumentsAdapted>
}
