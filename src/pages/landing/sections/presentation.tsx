import { ClickIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/navbar'
import { useLocation } from 'wouter'
import { getLocal, USER_KEY } from '@/utils'
import { Wrapper } from '@/components/wrapper'

export function Presentation() {
  const [, setLocation] = useLocation()

  return (
    <div className="flex flex-col h-screen">
      <NavBar />

      <Wrapper size={1100}>
        <section className="flex flex-col items-center justify-center w-full px-6 md:flex-row md:justify-between md:h-full">
          <div className="flex flex-col gap-6 md:items-start">
            <h1 className="text-xl font-bold text-center lg:text-5xl lg:leading-normal md:text-4xl md:leading-normal md:text-start">
              {/* Document your <br /> Project with just few <br />{' '}
              <span className="flex items-center gap-8">
                Clicks <ClickIcon />
              </span> */}
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
                if (getLocal(USER_KEY)?.token) {
                  setLocation('/home')
                } else {
                  setLocation('/login')
                }
              }}
            >
              Start now
            </Button>
          </div>

          <img src="/mainImage_dark.avif" className="hidden dark:block" />
          <img src="/mainImage_light.avif" className="block dark:hidden" />
        </section>
      </Wrapper>

      {/* <div className="flex justify-center gap-2 my-5">
        <CornerDownRight />
        <h1 className="text-lg font-semibold"> Playground </h1>
        <CornerRightDown className="translate-y-1/2" />
      </div> */}
    </div>
  )
}
