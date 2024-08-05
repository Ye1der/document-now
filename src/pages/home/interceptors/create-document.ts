import { DocForm, DocumentInterceptor } from '@/models'

export function createDocumentInterceptor(
  data: DocForm,
  repoName: string,
  owner: string
): DocumentInterceptor {
  return {
    ...data,
    repoName,
    owner,
  }
}
