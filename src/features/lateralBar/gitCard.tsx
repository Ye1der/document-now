import { Github } from '@/components/icons'
import { cn } from '@/lib/utils'
import {
  ArrowDown01Icon,
  ArrowMoveDownRightIcon,
  File01Icon,
  GitMergeIcon,
  Link05Icon,
} from 'hugeicons-react'
import { useState } from 'react'
import { IRepo } from './interfaces'

export function GitCard({ repo }: { repo: IRepo }) {
  const [extend, setExtend] = useState(false)

  return (
    <div
      className={cn(
        'w-full h-[52px] overflow-hidden bg-[rgb(255,255,255,0.02)] hover:bg-white/5 rounded-[18px] p-3 transition-all ease-in-out',
        extend && 'h-auto bg-white/5',
      )}
      style={{ interpolateSize: 'allow-keywords' }}
    >
      <div
        onClick={() => {
          setExtend(!extend)
        }}
        className="flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Github size={26} />
          <h1 className="font-medium"> {repo.name} </h1>
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
        <div className="flex gap-3 items-center opacity-60 mt-5">
          <File01Icon />
          <h2 className="font-medium text-sm"> Current commit doc </h2>
        </div>
        <div className="flex gap-2 items-center mt-5 translate-x-4 -translate-y-5">
          <ArrowMoveDownRightIcon
            size={20}
            className="-translate-y-1 opacity-60"
          />
          <h2 className="font-medium text-sm">
            {' '}
            name of the current commit doc{' '}
          </h2>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="font-bold bg-customGray py-2 px-3 rounded-xl">
          View doc
        </button>

        <button className="font-bold bg-customBlueUltraBlack py-2 px-3 rounded-xl">
          Doc! now
        </button>
      </div>
    </div>
  )
}
