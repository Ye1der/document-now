import { ClickIcon, Github } from '@/components/icons'
import { NavLogo } from './navLogo'
import { Button } from '@/components/button'

export function Presentation() {
  return (
    <div className="flex flex-col">
      <NavLogo />

      <section className="flex items-center justify-center px-6 md:flex-row mt-8">
        <div className="flex flex-col gap-6 md:items-start w-[600px]">
          <h1 className="text-xl font-bungee text-center lg:text-5xl lg:leading-normal md:text-4xl md:leading-normal md:text-start">
            Document your Project with just few{' '}
            <span className="inline-flex items-center gap-2 w-min">
              Clicks <ClickIcon className="w-9 h-9" />
            </span>
          </h1>

          <p className="text-sm font-semibold leading-normal md:text-2xl opacity-80">
            Powered by AI Document now allows you to document any project
            quickly and easily.
          </p>

          <Button
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

        <div className="relative h-[440px] rounded-2xl">
          <img
            src="/imagePreview.svg"
            alt="image preview"
            className="h-[440px] rounded-2xl"
          />
          <div className="z-30 absolute w-full h-full top-0 right-0 rounded-2xl bg-gradient-to-l from-customBlueUltraBlack to-transparent">
            {' '}
          </div>
        </div>
      </section>
    </div>
  )
}
