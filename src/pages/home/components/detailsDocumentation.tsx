import { Github } from '@/components/icons'
import { useGlobalContext } from '@/context/globalContext'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'

export function DetailsDocumentation() {
  const { setCurrentDoc } = useGlobalContext()

  const classButton = cn(
    'font-semibold opacity-50 hover:opacity-100 transition-opacity'
  )

  type Options = 'documentation' | 'markdown'
  const options: Options[] = ['documentation', 'markdown']
  const [option, setOption] = useState<Options>('documentation')

  return (
    <section className="flex flex-col w-full">
      <div className="flex items-center gap-3">
        <Github className="w-8 h-8" />
        <h1 className="text-xl font-bold"> Project name </h1>

        <button
          onClick={() => {
            setCurrentDoc(null)
          }}
          className="absolute right-[35px]"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <nav className="flex gap-5 mt-6">
        {options.map((element) => (
          <button
            className={cn(classButton, option == element && 'opacity-100')}
            onClick={() => {
              setOption(element)
            }}
          >
            {element[0].toUpperCase() + element.slice(1)}
          </button>
        ))}
      </nav>
      <hr className="mt-1" />
      <section className="flex flex-col flex-grow gap-5 overflow-auto mt-7 pb-7">
        <h1 className="text-2xl font-semibold">Tittle</h1>

        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno.
        </p>

        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>

        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años
        </p>
      </section>
    </section>
  )
}
