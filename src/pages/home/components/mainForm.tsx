import { FileText } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { DescriptionForm } from './descriptionForm'
import { SelectLangForm } from './selectLangForm'
import { TittleForm } from './tittleForm'
import { createDocumentInterceptor } from '../interceptors/create-document'
import { DocForm } from '@/models'
import { useGlobalContext } from '@/context/globalContext'
import { createRepoDoc } from '../services'
import { useToken } from '@/hooks'
import { toast } from 'sonner'

export function MainForm() {
  const { currentRepo } = useGlobalContext()
  const { accessToken: token } = useToken()

  const methods = useForm({
    defaultValues: {
      title: '',
      description: '',
      lang: '',
    },
  })

  const onSubmit = async (data: unknown) => {
    try {
      const docInterceptor = createDocumentInterceptor(
        data as DocForm,
        currentRepo.name,
        currentRepo.owner
      )

      const response = await createRepoDoc(token, docInterceptor)
      console.log(response)
      toast.success('Document created successfully')
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while creating the document')
    }
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
