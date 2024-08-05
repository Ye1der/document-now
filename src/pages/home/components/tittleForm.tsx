import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControlForm } from '@/types'

export function TittleForm({ control }: { control: ControlForm }) {
  return (
    <FormField
      name="title"
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tittle</FormLabel>
          <FormControl>
            <Input
              placeholder="Type a tittle for this documentation"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
