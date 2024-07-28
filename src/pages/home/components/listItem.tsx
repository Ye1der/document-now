import { ChevronRight } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface Props {
  name: string
  icon: React.ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export function ListItem({ name, icon, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="group bg-black bg-opacity-10 dark:bg-[#151515] py-3 w-full px-4 rounded-xl flex gap-4 items-center relative cursor-pointer"
    >
      {icon}
      <h1 className="transition-opacity opacity-80 group-hover:opacity-100">
        {name[0].toUpperCase() + name.slice(1)}
      </h1>
      <ChevronRight
        size={20}
        className="absolute transition-all opacity-80 right-5 group-hover:right-4 group-hover:opacity-100"
      />
    </div>
  )
}
