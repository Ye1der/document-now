import { useEffect } from 'react'
import { MainCard } from './sections/mainCard'
import { socket } from '@/services'
import { TempDoc } from '@/types'
import { useDocumentContext } from '@/context/documentContext'
import { DocumentsAdapted } from '@/models'
import { useLocation } from 'wouter'
import { useUser } from '@/hooks'
import { getLocal, TEMP_DOCS_KEY } from '@/utils'

export function HomePage() {
  const { setTempDocs, setDocuments } = useDocumentContext()

  const [, setLocation] = useLocation()
  const { user } = useUser()

  useEffect(() => {
    // Se puso aqui para usar el use token  y para un efecto mas inmediato a la hora de recibir el token
    // y redirigir a la pagina de inicio
    if (!user) {
      setLocation('~/')
      return
    }

    function onConnect() {
      console.log('connected')
    }

    function onDisconnect() {
      console.log('disconnected')
    }

    function generatedEvent({ id, repoName, username, title }: TempDoc) {
      if (!id || !repoName || !username || !title) {
        throw new Error('no se recibieron los datos')
      }

      const tempDocsLocal = getLocal(TEMP_DOCS_KEY) as TempDoc[]

      const currentTemp = tempDocsLocal.filter((doc) => {
        if (username === doc.username) {
          if (repoName === doc.repoName) {
            return false
          }

          return true
        }
      })

      setTempDocs(currentTemp)

      const doc: DocumentsAdapted = {
        id,
        repoName,
        title,
      }

      setDocuments((docs) => [...docs, doc])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('connect_error', (err) => {
      console.log(err)
    })

    socket.on('generated-document', generatedEvent)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('generated-document', generatedEvent)
    }
  }, [])
  return (
    <section className="flex items-center justify-center flex-grow h-full overflow-auto ">
      <MainCard />
    </section>
  )
}
