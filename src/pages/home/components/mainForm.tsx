import { FileText } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { DescriptionForm } from './descriptionForm'
import { SelectLangForm } from './selectLangForm'
import { TittleForm } from './tittleForm'

export function MainForm() {
  const methods = useForm({
    defaultValues: {
      tittle: '',
      description: '',
      lang: '',
    },
  })

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <section className="w-full mt-10">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-5"
        >
          <TittleForm control={methods.control} />
          <DescriptionForm control={methods.control} />
          <SelectLangForm control={methods.control} />

          <Button className="mt-5" type="submit">
            Document <FileText className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </FormProvider>
    </section>
  )
}
