import { Github } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { ControlForm } from '@/types'
import { useState } from 'react'

export function RepoUrlForm({ control }: { control: ControlForm }) {
  const [selectOwn, setSelectOwn] = useState(false)

  const repos = [
    'document-now',
    'jokes-generator',
    'routine-editor',
    'celcuotas'
  ]

  return (
    <section>
      <div className="flex justify-between items-center gap-4 mb-3">
        <Button
          type="button"
          className={cn(
            'w-full hover:bg-black/10 ',
            !selectOwn && 'dark:bg-white/10 bg-black/10'
          )}
          variant={'outline'}
          onClick={() => {
            setSelectOwn(false)
          }}
        >
          Repository url
        </Button>

        <span> or </span>

        <Button
          type="button"
          className={cn(
            'w-full hover:bg-black/10 ',
            selectOwn && 'dark:bg-white/10 bg-black/10'
          )}
          variant={'outline'}
          onClick={() => {
            setSelectOwn(true)
          }}
        >
          Select own
        </Button>
      </div>

      <FormField
        name={'repo'}
        control={control}
        render={({ field }) => {
          if (selectOwn) {
            field.value = ''
            return (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select a repository" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> Repositories </SelectLabel>
                    {repos.map((repo) => (
                      <SelectItem value={repo}>
                        <div className="flex items-center justify-start gap-3">
                          <Github className="w-4 h-4" />
                          <span> {repo} </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )
          } else {
            field.value = ''
            return (
              <Input
                placeholder="Type the url public repo"
                className="h-10"
                spellCheck={false}
                onChange={field.onChange}
                defaultValue={field.value}
              />
            )
          }
        }}
      />
    </section>
  )
}
