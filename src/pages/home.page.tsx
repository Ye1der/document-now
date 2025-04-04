import { atomCurrentDoc } from '@/atoms/atoms'
import { Documentation } from '@/features/docs/documentation.feature'
import { LateralBar } from '@/features/lateralBar/ui/laeteralBar.module'
import { SetKey } from '@/features/setKey/setKey.feature'
import { useLoading } from '@/hooks/loading.hook'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export function HomePage() {
  const [doc] = useAtom(atomCurrentDoc)
  const { loading } = useLoading('loadingDoc')

  useEffect(() => {
    console.log('loading --> ', loading)
  }, [loading])

  return (
    <section className="bg-customBlueUltraBlack h-screen flex">
      <LateralBar />
      {doc ? <Documentation /> : <SetKey />}
    </section>
  )
}
