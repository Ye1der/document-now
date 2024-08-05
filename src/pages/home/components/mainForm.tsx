import { FileText, Loader2 } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { DescriptionForm } from './descriptionForm'
import { SelectLangForm } from './selectLangForm'
import { TittleForm } from './tittleForm'
import { createDocumentInterceptor } from '../interceptors/create-document'
import { useGlobalContext } from '@/context/globalContext'
import { createRepoDoc } from '../services'
import { useUser } from '@/hooks'
import { toast } from 'sonner'
import { Set, TempDoc } from '@/types'
import { useState } from 'react'
import { generateDocSchema } from '../schemas'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DocForm } from '@/models'
import { useDocumentContext } from '@/context/documentContext'

interface Props {
  setOpen: Set<boolean>
}

export function MainForm({ setOpen }: Props) {
  const [loading, setLoading] = useState(false)

  const { currentRepo } = useGlobalContext()
  const { user } = useUser()
  const { setTempDocs } = useDocumentContext()

  const form = useForm<z.infer<typeof generateDocSchema>>({
    resolver: zodResolver(generateDocSchema),
    defaultValues: {
      title: '',
      description: '',
      lang: 'ES',
    },
  })

  const onSubmit = async (data: z.infer<typeof generateDocSchema>) => {
    try {
      const docInterceptor = createDocumentInterceptor(
        data as DocForm,
        currentRepo.name,
        currentRepo.owner
      )
      setLoading(true)
      const response: TempDoc = await createRepoDoc(user.token, docInterceptor)

      if (response.loading) {
        setTempDocs((prev) => [...prev, response])
      }

      setLoading(false)
      setOpen(false)
      toast.info(
        'The docuement is being created, check the documents section',
        {
          position: 'top-center',
        }
      )
    } catch (error) {
      setLoading(false)
      console.error(error)
      toast.error('An error occurred while creating the document')
    }
  }

  return (
    <section className="w-full mt-10">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-5"
        >
          <TittleForm control={form.control} />
          <DescriptionForm control={form.control} />
          <SelectLangForm control={form.control} />

          <Button disabled={loading} className="mt-5" type="submit">
            {loading ? (
              <>
                Loading... <Loader2 className="w-4 h-4 ml-2 animate-spin" />
              </>
            ) : (
              <>
                Document <FileText className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </FormProvider>
    </section>
  )
}
