import { ClickIcon, Github } from '@/components/icons'
import { NavLogo } from './navLogo'
import { Button } from '@/components/button'
import { TextAnimation } from '@/animactions/textAnimation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export function Presentation() {
  const toRight = useRef(null)
  const toLeft = useRef(null)

  useGSAP(() => {
    gsap.from(toRight.current, {
      x: -300,
      opacity: 0,
      duration: 1.5,
    })

    gsap.from(toLeft.current, {
      x: 300,
      opacity: 0,
      duration: 1.5,
    })
  })

  return (
    <div className="flex flex-col">
      <NavLogo />

      <section className="flex items-center justify-center px-6 md:flex-row mt-8">
        <div className="flex flex-col gap-6 md:items-start w-[600px]">
          <h1 className="text-xl font-bungee text-center lg:text-5xl lg:leading-normal md:text-4xl md:leading-normal md:text-start">
            <TextAnimation text="Document your Project with just few clicks">
              <ClickIcon className="w-14 h-14" />
            </TextAnimation>
          </h1>
          <div ref={toRight} className="flex flex-col gap-6 items-start">
            <p className="to_right text-sm font-semibold leading-normal md:text-2xl opacity-80">
              Powered by AI Document now allows you to document any project
              quickly and easily.
            </p>

            <Button
              className="to_right"
              onClick={() => {
                const url = new URL('http://localhost:3000/api/v1/auth/login')
                url.searchParams.set('redirect', 'http://localhost:5173/home')
                window.location.replace(url)
              }}
            >
              <h1 className="font-bold text-lg"> Continue with github </h1>
              <Github className="w-7 fill-background" />
            </Button>
          </div>
        </div>

        <div ref={toLeft} className="to_left relative h-[440px] rounded-2xl">
          <img
            src="/imagePreview.svg"
            alt="image preview"
            className="h-[440px] rounded-2xl"
          />
          <div className="z-30 absolute w-full h-full top-0 right-0 rounded-2xl bg-gradient-to-l from-customBlueUltraBlack to-transparent"></div>
        </div>
      </section>
    </div>
  )
}
