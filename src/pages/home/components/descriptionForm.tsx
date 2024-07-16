import { FormField } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { ControlForm } from '@/types'

export function DescriptionForm({ control }: { control: ControlForm }) {
  return (
    <FormField
      name="description"
      control={control}
      render={({ field }) => (
        <div className="-mt-1">
          <label htmlFor="description" className="font-semibold text-sm">
            Description
          </label>
          <Textarea
            onChange={field.onChange}
            defaultValue={field.value}
            id="description"
            spellCheck={false}
            placeholder="Short description of you project"
            className="min-h-14 max-h-16 mt-1"
          />
        </div>
      )}
    />
  )
}
