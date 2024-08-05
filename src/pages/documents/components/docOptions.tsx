import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { EllipsisVertical } from 'lucide-react'

export function DocOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-0 m-0 border-none outline-none bg-none">
          <EllipsisVertical />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>More options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* only for premium */}
          <DropdownMenuItem disabled>
            Regenerate doc
            <DropdownMenuShortcut>⌘+R</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* <DropdownMenuItem> */}
        <Button variant="destructive" className="w-full">
          Delete
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
