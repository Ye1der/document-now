import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ChevronRight, Download, FileDown } from 'lucide-react'

interface Props {
  data: SidebarContent[]
}

export function Sidebar({ data }: Props) {
  // TODO: Mirar a ver si el acordio esta bien o usar otro
  return (
    <div className="flex flex-col justify-start h-full gap-3 overflow-hidden">
      <div className="flex flex-col flex-grow overflow-y-auto pr-3">
        {data.map((item, index) => (
          <a
            key={index}
            href={`#${item.title}`}
            className="group relative flex justify-between items-center w-full text-start hover:bg-foreground hover:text-background px-3 py-[7px] my-1 transition-colors rounded-lg"
          >
            <p className="text-ellipsis w-[85%] text-nowrap overflow-hidden font-semibold text-sm">
              {item.title.split(' ').slice(1).join(' ')}
            </p>

            <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>

      <div className="mt-5">
        <Button className="w-full h-[40px]">
          Download documentation <FileDown size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  )
}
