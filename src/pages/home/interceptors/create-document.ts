import { DocForm, DocumentInterceptor } from '../models'

export function createDocumentInterceptor(
  data: DocForm,
  repoName: string
): DocumentInterceptor {
  return {
    ...data,
    repoName,
  }
}
