import { Github } from '@/components/icons'
import { ChevronRight } from 'lucide-react'

export function Repo({ name }: { name: string }) {
  return (
    <div className="group bg-black bg-opacity-10 dark:bg-[#151515] py-3 w-full px-4 rounded-xl flex gap-4 items-center relative cursor-pointer">
      <Github className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
      <h1 className="opacity-80 group-hover:opacity-100 transition-opacity">
        {name[0].toUpperCase() + name.slice(1)}
      </h1>
      <ChevronRight
        size={20}
        className="absolute opacity-80 right-5 group-hover:right-4 group-hover:opacity-100 transition-all"
      />
    </div>
  )
}
