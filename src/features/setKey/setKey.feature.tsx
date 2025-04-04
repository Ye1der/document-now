import { emitter } from '@/emitters/emitter'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { CustomKey, MistralAI } from '@/components/icons'
import {
  ArrowRight01Icon,
  ArrowShrinkIcon,
  BookOpen02Icon,
  Structure04Icon,
} from 'hugeicons-react'
import './borderAnimation.css'
import { setAiApiKey } from './setAiApiKey'
import { CustomLoading } from '@/components/customLoading'

export function SetKey() {
  const ref = useRef(null)
  const [inputKey, setInputKey] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emitter.on('showKey', (value) => {
      if (!value) {
        gsap.to(ref.current, {
          scale: 0,
          opacity: 0,
          ease: 'back.in',
          onComplete: () => {
            emitter.emit('showDoc', true)
          },
        })
      }
    })

    gsap.to(ref.current, {
      scale: 1,
      opacity: 1,
      ease: 'back.out',
    })
  }, [])

  const setKey = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault()
    await setAiApiKey(inputKey)
    setLoading(false)
  }

  return (
    <section className="w-full h-full flex items-center justify-center overflow-hidden">
      <div ref={ref} className="opacity-0 scale-0 flex flex-col items-center">
        <h1 className="font-bungee text-4xl">
          set your{' '}
          <span className="text-transparent bg-gradient-to-r from-[#E3499C] to-[#6D6AEE] bg-clip-text">
            {' '}
            ai api key{' '}
          </span>{' '}
          here
        </h1>
        <h1 className="font-bungee text-4xl">to generate documentations</h1>

        <section className="flex gap-3 mt-5">
          <div id="borderBox">
            <CustomKey size={20} />
            <form onSubmit={setKey}>
              <input
                required
                name="key"
                value={inputKey}
                onChange={(event) => {
                  setInputKey(event.target.value)
                }}
                spellCheck={false}
                autoCorrect="off"
                autoComplete="off"
                placeholder="Your AI API Key here"
                className="peer bg-transparent font-semibold text-white placeholder:text-white/20 outline-none mr-6"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full w-[35px] flex items-center justify-center bg-customBlueGray text-customBlueUltraBlack rounded-r-xl hover:text-white transition peer-valid:text-white"
              >
                {loading ? <CustomLoading /> : <ArrowRight01Icon />}
              </button>
            </form>
          </div>

          <div className="bg-customBlueBlack py-2 px-3 flex items-center justify-center gap-3 rounded-xl">
            <MistralAI />
            <p className="font-semibold"> Mistral AI </p>
            <ArrowRight01Icon className="rotate-90 text-customBlueUltraBlack" />
          </div>
        </section>

        <div className="flex gap-6 mt-10">
          <span className="flex bg-[rgba(255,255,255,0.01)] p-3 rounded-xl items-center gap-3">
            <ArrowShrinkIcon color="#E3499C" />
            <p className="font-semibold w-[150px] text-white/80">
              short files will generate better documentation
            </p>
          </span>

          <span className="flex bg-[rgba(255,255,255,0.01)] p-3 rounded-xl items-center gap-3">
            <BookOpen02Icon color="#A75AC5" />
            <p className="font-semibold w-[150px] text-white/80">
              It helps to have an md file explaining the project
            </p>
          </span>

          <span className="flex bg-[rgba(255,255,255,0.01)] p-3 rounded-xl items-center gap-3">
            <Structure04Icon color="#6D6AEE" />
            <p className="font-semibold w-[150px] text-white/80">
              having a clear architecture also helps{' '}
            </p>
          </span>
        </div>
      </div>
    </section>
  )
}
