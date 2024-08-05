import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { MainForm } from './mainForm'
import { useGlobalContext } from '@/context/globalContext'
import { Set } from '@/types'

interface Props {
  setOpen: Set<boolean>
}

export function SheetRepo(props: Props) {
  const { currentRepo } = useGlobalContext()

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Generate new documentation</SheetTitle>
        <SheetDescription>
          Fill the follow form to generate a new documentation for
          <span className="font-semibold"> {currentRepo.name} </span>
          repository
        </SheetDescription>
      </SheetHeader>

      <MainForm {...props} />
    </SheetContent>
  )
}
