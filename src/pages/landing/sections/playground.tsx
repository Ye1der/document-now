import { Redo } from 'lucide-react'
import { CardPlayground } from '../components/cardPlayground'

export function Playground() {
  return (
    <section className="flex justify-center items-center gap-8 mt-20">
      <div className="flex flex-col justify-start h-[500px]">
        <h1 className="text-[30px] font-bold"> Structure as your project </h1>
        <p className="text-[20px] font-bold opacity-80">
          the documentations are generated <br />
          file by file and organized in a similar <br />
          way to your project
        </p>
      </div>

      <div className="relative w-fit h-fit">
        <img
          src="/imageDecorator1_dark.png"
          className="absolute -z-10 top-0 right-0 -translate-y-3/4 translate-x-3/4 hidden dark:block"
        />

        <img
          src="/imageDecorator1_light.png"
          className="absolute -z-10 top-0 right-0 -translate-y-3/4 translate-x-3/4 block dark:hidden"
        />

        <Redo
          size={50}
          className="absolute left-0 top-10 -translate-x-20 rotate-[220deg]"
        />

        <CardPlayground />

        <Redo
          size={50}
          className="absolute right-0 bottom-10 translate-x-20 rotate-[35deg]"
        />

        <img
          src="/imageDecorator2_dark.png"
          className="absolute -z-10 bottom-0 left-0 translate-y-3/4 -translate-x-[90%] hidden dark:block"
        />

        <img
          src="/imageDecorator2_light.png"
          className="absolute -z-10 bottom-0 left-0 translate-y-3/4 -translate-x-[90%] block dark:hidden"
        />
      </div>

      <div className="h-[500px] flex flex-col justify-end">
        <h1 className="text-[30px] font-bold"> Generate easely </h1>
        <p className="text-[20px] font-bold opacity-80">
          the documentations are generated <br />
          file by file and organized in a similar <br />
          way to your project
        </p>
      </div>
    </section>
  )
}
