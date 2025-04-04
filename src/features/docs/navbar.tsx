import { atomCurrentDoc } from '@/atoms/atoms'
import { Github } from '@/components/icons'
import { useGSAP } from '@gsap/react'
import {
  ArrowLeft01Icon,
  ArrowMoveLeftDownIcon,
  Copy01Icon,
  GitCommitIcon,
} from 'hugeicons-react'
import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { toast } from 'sonner'
import { emitter } from '@/emitters/emitter'

export function Navbar() {
  const [doc, setDoc] = useAtom(atomCurrentDoc)
  const ref = useRef(null)

  useGSAP(() => {
    if (!doc) return

    gsap.to(ref.current, {
      x: 0,
      delay: 0.5,
      duration: 1,
      ease: 'expo.out',
    })
  }, [doc])

  useEffect(() => {})

  const close = () => {
    emitter.emit('showDoc', true)
    gsap.to(ref.current, {
      opacity: 0,
      x: -300,
      duration: 1,
      onComplete: () => {
        setDoc(null)
      },
    })
  }

  const copyCommit = () => {
    navigator.clipboard.writeText(doc?.commit ?? '')
    toast.success('Commit copied')
  }

  return (
    <section
      ref={ref}
      className="relative -translate-x-[300px] z-10 flex flex-col gap-3 bg-white bg-opacity-[0.02] h-[100%] p-3 my-auto rounded-r-2xl border-l-2 border-customBlueUltraBlack"
    >
      {/* <div className="w-full flex justify-end"> */}
      <button
        onClick={close}
        className="absolute top-0 right-0 flex items-center justify-normal gap-1 hover:gap-3 hover:text-orange-200 bg-customBlueUltraBlack pr-3 pl-1 py-1 rounded-bl-xl transition-all ease-in-out"
      >
        <ArrowLeft01Icon />
        <span className="font-semibold"> Close </span>
      </button>
      {/* </div> */}

      <section className="flex gap-3 items-center mt-8">
        <Github size={30} />
        <h1 className="font-bold text-lg"> Document-now </h1>
      </section>

      {/* <div className="flex gap-1 items-center opacity-30">
          <CurvyRightDirectionIcon className="rotate-90" size={30} />
          <p className="font-semibold text-sm"> current commit doc </p>
        </div> */}

      <section className="ml-2 flex gap-2">
        <ArrowMoveLeftDownIcon className="rotate-180" />
        <div className="flex">
          <div className="bg-customBlueGray py-2 pr-3 pl-1 w-full rounded-l-xl flex items-center">
            <GitCommitIcon />
            <p className="font-semibold text-sm">{doc?.commit?.slice(0, 15)}</p>
          </div>
          <button
            onClick={copyCommit}
            className="bg-customBlueGray p-2 rounded-r-xl border-l-2 border-customBlueUltraBlack hover:text-orange-200"
          >
            <Copy01Icon size={18} />
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-3 overflow-auto h-full pt-4 pb-10 border-t border-white/20 mt-3">
        {(doc?.ids?.length ?? 0) > 0 &&
          doc?.ids.map((name) => {
            return (
              <a
                href={'#' + name}
                key={name}
                className="font-semibold text-white/50 hover:text-orange-100 transition-colors duration-200"
              >
                {name.slice(0, 1).toUpperCase() +
                  name.slice(1).replace(/-/g, ' ')}
              </a>
            )
          })}
      </section>
    </section>
  )

  return <></>
}
