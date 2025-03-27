import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

interface Props {
  text: string
  className?: string
  children: React.ReactNode
}

export function TextAnimation({ text, className, children }: Props) {
  const ref = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const letters = ref.current?.querySelectorAll('.letter') as GSAPTweenTarget

    const tl = gsap.timeline({
      onComplete: () => {
        const child = ref.current?.querySelector('.child') as GSAPTweenTarget

        gsap.to(child, {
          scale: 1,
          ease: 'back.out',
        })
      },
    })

    tl.fromTo(
      letters,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.3,
        ease: 'power3.out',
      },
    )
  })

  return (
    <h1 ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word inline-flex items-center">
          {word.split('').map((char, j) => (
            <span key={j} className="letter inline-block">
              {char}
            </span>
          ))}
          {/* Espacio entre palabras */}
          <span className="inline-block">&nbsp;</span>
          {text.split(' ').length - 1 == i && (
            <span className="child scale-0"> {children} </span>
          )}
        </span>
      ))}
    </h1>
  )
}
