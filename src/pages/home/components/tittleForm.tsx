import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControlForm } from '@/types'

export function TittleForm({ control }: { control: ControlForm }) {
  return (
    <FormField
      name="tittle"
      control={control}
      render={({ field }) => (
        <div className="-mt-1">
          <label htmlFor="description" className="font-semibold text-sm">
            Tittle
          </label>
          <Input
            onChange={field.onChange}
            defaultValue={field.value}
            id="description"
            spellCheck={false}
            placeholder="Type a tittle for this documentation"
            className="h-10 mt-1"
          />
        </div>
      )}
    />
  )
}
