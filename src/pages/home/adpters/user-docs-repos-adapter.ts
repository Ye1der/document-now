import { DocsRepos, DocsReposAdapted } from '../models'

export function userDocsReposAdapter(data: DocsRepos[]): DocsReposAdapted[] {
  return data.map((doc) => ({
    id: doc.id,
    title: doc.title,
    content: doc.content,
    repository: {
      id: doc.repoInfo.id,
      name: doc.repoName,
      description: doc.repoInfo.description,
      branch: doc.repoInfo.default_branch,
    },
  }))
}
