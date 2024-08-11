import { deleteDoc, getDocByReponame, getDocs } from '@/services'
import { ICreateDoc, IDocumentsRepository } from '../interfaces'
import { createDoc } from '@/services'

export const documentsAdapter: IDocumentsRepository = {
  getDocContentByReponame: async (token: string, repoName: string) => {
    const response = await getDocByReponame(token, repoName)
    return await response.text()
  },
  getDocs: async (token: string) => {
    const docs = await getDocs(token)

    return docs.map((doc) => ({
      id: doc.id,
      title: doc.title,
      repoName: doc.repoName,
    }))
  },
  createDoc: async (token: string, data: ICreateDoc) => {
    const doc = await createDoc(token, data)
    return doc
  },
  getBlobDoc: async (token: string, repoName: string) => {
    const response = await getDocByReponame(token, repoName)
    return await response.blob()
  },
  deleteDocument: async (token: string, id: number) => {
    const data = await deleteDoc(token, id)

    return {
      id: data.id,
      title: data.title,
      repoName: data.repoName,
    }
  },
}
