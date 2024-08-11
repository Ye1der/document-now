import { Button } from '@/components/ui/button'
import { ChevronRight, FileDown } from 'lucide-react'
import { DocOptions } from './docOptions'
import { documentsRepository, IDocumentsAdapted } from '@/models/documents'
import { useUser } from '@/hooks'
import { useRef } from 'react'
import { useSearch } from 'wouter'

interface Props {
  data: SidebarContent[]
  repoName: string
}

export function Sidebar({ data, repoName }: Props) {
  const search = useSearch()

  const $link = useRef<HTMLAnchorElement>(null)
  const { user } = useUser()

  const downloadDocument = async () => {
    try {
      if (!$link.current) return

      if (!user?.token) {
        console.log(user)
        throw new Error('token not found')
      }

      const data = await documentsRepository.getBlobDoc(user.token, repoName)

      const url = window.URL.createObjectURL(data)

      $link.current.href = url
      $link.current.download = `${repoName}.md`
      $link.current.click()
    } catch (err) {
      console.log(err)
    }
  }

  const deleteDocument = async (): Promise<IDocumentsAdapted> => {
    const key = search.split('=')[0]
    const value = search.split('=')[1]

    if (key !== 'id') throw new Error('Invalid key')
    if (value === '' || !value) throw new Error('Invalid value: ' + value)
    if (!Number(value) && Number(value) !== 0)
      throw new Error('Invalid value: ' + value)

    return await documentsRepository.deleteDocument(user?.token, Number(value))
  }

  return (
    <div className="flex flex-col justify-start h-full gap-3 overflow-hidden">
      <a className="hidden" href="" download />
      <div className="flex flex-col flex-grow pr-3 overflow-y-auto">
        {data.map((item, index) => (
          <a
            ref={$link}
            key={index}
            href={`#${item.title}`}
            className="group relative flex justify-between items-center w-full text-start hover:bg-foreground hover:text-background px-3 py-[7px] my-1 transition-colors rounded-lg"
          >
            <p className="text-ellipsis w-[85%] text-nowrap overflow-hidden font-semibold text-sm">
              {item.title.split(' ').slice(1).join(' ')}
            </p>

            <ChevronRight className="transition-opacity opacity-0 group-hover:opacity-100" />
          </a>
        ))}
      </div>

      <div className="flex items-center justify-between w-full gap-2 mt-5">
        <Button className="flex-1 h-[40px]" onClick={downloadDocument}>
          Download documentation <FileDown size={20} className="ml-2" />
        </Button>

        <DocOptions deleteDocument={deleteDocument} />
      </div>
    </div>
  )
}
