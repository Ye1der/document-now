import { FormField } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ControlForm } from '@/types'

export function SelectLangForm({ control }: { control: ControlForm }) {
  const langs = [
    {
      value: 'ES',
      label: '🇨🇴 Español',
    },
    {
      value: 'EN',
      label: '🇺🇸 English',
    },
  ]

  return (
    <FormField
      name="lang"
      control={control}
      render={({ field }) => (
        <div className="-mt-1">
          <label htmlFor="langs" className="text-sm font-semibold">
            Language
          </label>

          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger id="langs" className="h-10 mt-1">
              <SelectValue placeholder="Select lang" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel> Langs </SelectLabel>
                {langs.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    <div className="flex items-center justify-start gap-3">
                      <span> {lang.label} </span>
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
