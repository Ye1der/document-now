import { documentsAdapter } from './adapters/documents.adapter'
import { ICreateDoc, IDocumentsRepository } from './interfaces'

function createDocumentsRepository(
  adapter: IDocumentsRepository
): IDocumentsRepository {
  return {
    getDocs: async (token: string) => {
      return await adapter.getDocs(token)
    },
    getDocContentByReponame: async (token: string, repoName: string) => {
      return await adapter.getDocContentByReponame(token, repoName)
    },
    createDoc: async (token: string, data: ICreateDoc) => {
      return await adapter.createDoc(token, data)
    },
    getBlobDoc: async (token: string, repoName: string) => {
      return await adapter.getBlobDoc(token, repoName)
    },
    deleteDocument: async (token: string, id: number) => {
      return await adapter.deleteDocument(token, id)
    },
  }
}

export const documentsRepository = createDocumentsRepository(documentsAdapter)
