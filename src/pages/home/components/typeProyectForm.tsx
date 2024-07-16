import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { ControlForm } from '@/types'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Brush, Layers, SquareTerminal } from 'lucide-react'

const cardIcons = {
  frontend: <Brush size={28} strokeWidth={1.3} className="mt-2" />,
  backend: <SquareTerminal size={28} strokeWidth={1.3} className="mt-2" />,
  fullstack: <Layers size={28} strokeWidth={1.3} className="mt-2" />
}

export function TypeProjectForm({ control }: { control: ControlForm }) {
  return (
    <FormField
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex gap-5"
            >
              {['frontend', 'backend', 'fullstack'].map((element) => {
                return (
                  <div
                    key={element}
                    className="flex items-center justify-center relative w-[100px] h-[80px]"
                  >
                    <RadioGroupItem
                      value={element}
                      id={element}
                      className="invisible"
                    />
                    <label htmlFor={element} className="absolute z-10">
                      <div
                        className={cn(
                          'w-[100px] h-[80px] border border-foreground rounded-lg flex flex-col justify-around items-center opacity-40 transition-all cursor-pointer hover:bg-white/5',
                          field.value === element && 'opacity-100'
                        )}
                      >
                        {cardIcons[element as keyof typeof cardIcons]}
                        <h1>{element[0].toUpperCase() + element.slice(1)}</h1>
                      </div>
                    </label>
                  </div>
                )
              })}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  )
}
