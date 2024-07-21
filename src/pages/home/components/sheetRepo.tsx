import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { MainForm } from './mainForm'
import { useGlobalContext } from '@/context/globalContext'

export function SheetRepo() {
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

      <MainForm />
    </SheetContent>
  )
}
