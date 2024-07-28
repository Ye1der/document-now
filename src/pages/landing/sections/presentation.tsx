import { ClickIcon, Github } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/navbar'
import { CornerDownRight, CornerRightDown } from 'lucide-react'

export function Presentation() {
  return (
    <>
      <div className="w-full h-16">
        <div className="fixed top-0 w-full">
          <NavBar />
        </div>
      </div>

      <section className="flex items-center justify-center gap-32">
        <div>
          <div className="text-[50px] font-bold">
            <h1> Document your </h1>
            <h1> Project with just few </h1>
            <h1 className="flex gap-8">
              Clicks <ClickIcon className="mt-1" />
            </h1>
          </div>

          <p className="text-[23px] font-semibold opacity-80 mt-7">
            Powered by AI Document now allows you to <br />
            document any project quickly and easily.
          </p>

          <Button className="py-5 mt-7">
            <h1 className="text-xl"> Continue with github </h1>
            <Github className="w-6 h-6 ml-4 fill-background" />
          </Button>
        </div>

        <img src="/mainImage_dark.avif" className="hidden dark:block" />
        <img src="/mainImage_light.avif" className="block dark:hidden" />
      </section>

      <div className="flex justify-center gap-2 my-5">
        <CornerDownRight />
        <h1 className="text-lg font-semibold"> Playground </h1>
        <CornerRightDown className="translate-y-1/2" />
      </div>
    </>
  )
}
