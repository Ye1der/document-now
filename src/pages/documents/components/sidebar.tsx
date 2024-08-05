import { Button } from '@/components/ui/button'
import { ChevronRight, FileDown } from 'lucide-react'
import { DocOptions } from './docOptions'

interface Props {
  data: SidebarContent[]
}

export function Sidebar({ data }: Props) {
  return (
    <div className="flex flex-col justify-start h-full gap-3 overflow-hidden">
      <div className="flex flex-col flex-grow pr-3 overflow-y-auto">
        {data.map((item, index) => (
          <a
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
        <Button className="flex-1 h-[40px]">
          Download documentation <FileDown size={20} className="ml-2" />
        </Button>

        <DocOptions />
      </div>
    </div>
  )
}
