import { Documents, DocumentsAdapted } from '@/models'

export function documentsAdapter(docs: Documents[]): DocumentsAdapted[] {
  return docs.map((doc) => ({
    id: doc.id,
    title: doc.title,
    repoName: doc.repoName,
  }))
}
