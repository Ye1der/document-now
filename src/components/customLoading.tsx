import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

interface Props {
  size?: number
}

export function CustomLoading({ size = 20 }: Props) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
      },
      { opacity: 1 },
    )

    gsap.to(ref.current, {
      scale: 1,
      ease: 'back.inOut',
      repeat: -1,
      yoyo: true,
      duration: 0.8,
    })
  })

  return (
    <section className="w-full h-full flex items-center justify-center">
      <span
        ref={ref}
        className="rounded-full bg-white scale-[20%]"
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </section>
  )
}
