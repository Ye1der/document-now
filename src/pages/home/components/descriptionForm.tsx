import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { ControlForm } from '@/types'

export function DescriptionForm({ control }: { control: ControlForm }) {
  return (
    <FormField
      name="description"
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder="Short description of you project"
              className="min-h-14 max-h-16"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
