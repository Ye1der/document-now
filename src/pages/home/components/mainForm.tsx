import { FileText, ScrollText } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { TypeProjectForm } from './typeProyectForm'
import { RepoUrlForm } from './repoUrlForm'
import { DescriptionForm } from './descriptionForm'
import { ApiKeyForm } from './apiKeyForm'
import { SelectLangForm } from './selectLangForm'

export function MainForm() {
  const methods = useForm({
    defaultValues: {
      type: 'backend',
      repo: '',
      description: '',
      apiKey: '',
      lang: ''
    }
  })

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <section className="w-full">
      <div className="flex items-center gap-3">
        <ScrollText size={30} />
        <h1 className="text-xl font-bold">New Documentation</h1>
      </div>

      <div className="flex w-full mt-4 justify-center items-center">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-5"
          >
            <TypeProjectForm control={methods.control} />
            <RepoUrlForm control={methods.control} />
            <DescriptionForm control={methods.control} />
            <div className="flex gap-3">
              <ApiKeyForm control={methods.control} />
              <SelectLangForm control={methods.control} />
            </div>

            <Button type="submit">
              Document <FileText className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </FormProvider>
      </div>
    </section>
  )
}
