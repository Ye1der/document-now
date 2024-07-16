import { FormField } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ControlForm } from '@/types'

export function SelectLangForm({ control }: { control: ControlForm }) {
  const langs = ['🇨🇴 Español', '🇺🇸 English']

  return (
    <FormField
      name="lang"
      control={control}
      render={({ field }) => (
        <div className="-mt-1">
          <label htmlFor="langs" className="font-semibold text-sm">
            Languages
          </label>

          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger id="langs" className="h-10 w-[120px] mt-1">
              <SelectValue placeholder="Select lang" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel> Langs </SelectLabel>
                {langs.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    <div className="flex items-center justify-start gap-3">
                      <span> {lang} </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    />
  )
}
