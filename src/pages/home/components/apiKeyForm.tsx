import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControlForm } from '@/types'

export function ApiKeyForm({ control }: { control: ControlForm }) {
  return (
    <FormField
      name="apiKey"
      control={control}
      render={({ field }) => (
        <div className="-mt-1">
          <label htmlFor="apikey" className="font-semibold text-sm">
            API Key
          </label>
          <Input
            onChange={field.onChange}
            id="apikey"
            defaultValue={field.value}
            placeholder="Type your OpenAi API Key"
            className="h-10 mt-1"
          />
        </div>
      )}
    />
  )
}
