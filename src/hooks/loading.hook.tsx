import { CustomLoading } from '@/components/customLoading'
import { loadingEmitter } from '@/emitters/loadingEmitter'
import { FC, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface Return {
  loading: boolean
  LoadingComponent: FC<{ size?: number }>
}

export function useLoading(event: string): Return {
  const [loading, setLoading] = useState(false)
  const refComponent = useRef(null)

  useEffect(() => {
    loadingEmitter.on(event, (value: boolean) => {
      if (value == true) setLoading(value)
      else if (value == false) {
        gsap.to(refComponent.current, {
          scale: 0,
          opacity: 0,
          onComplete: () => setLoading(value),
        })
      }
    })

    return () => loadingEmitter.off(event, setLoading)
  }, [])

  const LoadingComponent: FC<{ size?: number }> = ({ size }) => (
    <section className="w-full h-full flex items-center justify-center">
      <div ref={refComponent}>
        <CustomLoading size={size} />
      </div>
    </section>
  )

  return { loading, LoadingComponent }
}
