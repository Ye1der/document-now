import { ButtonLoading } from '@/components/ButtonLoading'
// import { Button } from '@/components/ui/button'
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
import { IDocumentsAdapted } from '@/models/documents'
import { EllipsisVertical } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { useLocation } from 'wouter'

interface Props {
  deleteDocument: () => Promise<IDocumentsAdapted>
}

export function DocOptions({ deleteDocument }: Props) {
  const [, setLocation] = useLocation()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      setLoading(true)
      const deletedDocument = await deleteDocument()
      setLoading(false)

      if (deletedDocument) {
        toast.success('Document deleted successfully')
        setLocation('~/home/documents')
      } else {
        console.log(deletedDocument)
      }
    } catch (err) {
      setLoading(false)
      console.log(err)
      toast.error('Error deleting document')
    }
  }

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

        <ButtonLoading
          loading={loading}
          variant="destructive"
          onClick={handleClick}
          className="w-full"
        >
          Delete
        </ButtonLoading>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
