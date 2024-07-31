import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

interface Props {
  data: SidebarContent[]
}

export function Sidebar({ data }: Props) {
  // TODO: Mirar a ver si el acordio esta bien o usar otro
  return (
    <div className="flex flex-col justify-start h-full gap-3 overflow-hidden">
      <Accordion
        type="single"
        collapsible
        className="flex-1 h-full overflow-auto"
      >
        {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div>
        <Button className="w-full">Download documentation</Button>
      </div>
    </div>
  )
}
