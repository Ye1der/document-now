import { Github } from '@/components/icons'
import { cn } from '@/lib/utils'
import { ArrowDown01Icon, GitMergeIcon, Link05Icon } from 'hugeicons-react'
import { useRef, useState } from 'react'
import { IRepo } from '../services/interfaces'
import { generateDoc } from '../services/generateDoc'
import { useAtom } from 'jotai'
import { atomCurrentDoc } from '@/atoms/atoms'
import { getDocumentation } from '../services/getDocumentation'
import { toast } from 'sonner'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { loadingEmitter } from '@/emitters/loadingEmitter'
import { existDoc } from '../services/existDocumentation'

gsap.registerPlugin(useGSAP)

export function GitCard({ repo }: { repo: IRepo }) {
  const [extend, setExtend] = useState(false)
  const [, setCurrentDoc] = useAtom(atomCurrentDoc)
  const ref = useRef(null)

  async function showDoc() {
    // Comprobamos si existe una documentacion de ese repo
    const exist = await existDoc(repo)
    if (!exist)
      return toast.warning(
        'This repository does not have a documentation created yet.',
      )

    // Pedimos la documentacion del repo
    loadingEmitter.emit('loadingDoc', true)
    const doc = await getDocumentation(repo)
    setCurrentDoc(doc)
    loadingEmitter.emit('loadingDoc', false)
  }

  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      duration: 0.8,
    })
  })

  useGSAP(() => {
    gsap.to(ref.current, {
      height: extend ? 'auto' : 52,
      duration: 0.3,
      ease: 'back.out',
    })
  }, [extend])

  return (
    <div
      ref={ref}
      className={cn(
        'w-full h-[52px] overflow-hidden bg-[rgb(255,255,255,0.02)] hover:bg-white/5 rounded-[18px] p-3',
        extend && 'h-auto bg-white/5',
      )}
    >
      <div
        onClick={() => {
          setExtend(!extend)
        }}
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Github size={26} />
          <h1 className="w-[200px] font-medium overflow-hidden whitespace-nowrap text-ellipsis truncate">
            {repo.name}
          </h1>
        </div>
        <div>
          <ArrowDown01Icon
            className={cn(
              extend ? 'rotate-180' : 'rotate-0',
              'transition-transform ease-in-out',
            )}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        {/* TODO: Tomar el ultimo commit del repo y mostrarlo */}
        {/* <div className="flex gap-3 items-center opacity-60">
          <GitCommitIcon className="rotate-90" />
          <h2 className="font-medium text-sm"> {repo.commits_url} </h2>
        </div> */}
        <div className="flex gap-3 items-center opacity-60">
          <Link05Icon />
          <a
            href={repo.html_url}
            target="_blank"
            className="hover:border-b hover:border-white/60"
          >
            <h2 className="font-medium text-sm w-[220px] truncate overflow-hidden text-ellipsis whitespace-nowrap">
              {repo.html_url}
            </h2>
          </a>
        </div>
        <div className="flex gap-3 items-center opacity-60">
          <GitMergeIcon />
          <h2 className="font-medium text-sm"> {repo.default_branch} </h2>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={showDoc}
          className="font-bold bg-customGray py-2 px-3 rounded-xl"
        >
          View doc
        </button>

        <button
          onClick={async () => {
            generateDoc(repo)
          }}
          className="font-bold bg-customBlueUltraBlack py-2 px-3 rounded-xl"
        >
          Doc! now
        </button>
      </div>
    </div>
  )
}
