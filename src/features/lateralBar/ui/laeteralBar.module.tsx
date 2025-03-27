import { Logo } from '@/components/icons'
import { GitCard } from './gitCard'
import { Login02Icon, Search01Icon } from 'hugeicons-react'
import { useEffect, useState } from 'react'
import { getRepos } from '../services/getRepos'
import { getLocal } from '@/utils'
import { IRepo } from '../services/interfaces'
import { CustomLoading } from '@/components/customLoading'

export function LateralBar() {
  const [repos, setRepos] = useState<IRepo[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [showLoadButton, setShowLoadButton] = useState(true)

  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true)
      const token = getLocal('token')
      const data = await getRepos(token, currentPage, 5)
      setRepos((currentRepos) => [...currentRepos, ...data.repositories])
      data.lastPage && setShowLoadButton(false)
      setLoading(false)
    }

    !loading && fetchRepos()
  }, [currentPage])

  return (
    <section className="z-50 w-[350px] flex flex-col justify-between h-screen p-4 bg-customBlueBlack">
      <div className="flex items-center gap-2 mt-3">
        <Logo size={60} className="-rotate-[20deg]" />
        <h2 className="text-lg font-bungee md:text-2xl"> Doc! Now </h2>
      </div>

      <section>
        <div className="flex gap-3 bg-customBlueUltraBlack rounded-2xl p-3 mt-8">
          <Search01Icon />
          <input
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search repositorie..."
            className="bg-transparent font-normal outline-none"
          />
        </div>
      </section>

      <section className="mt-5 flex-grow overflow-y-auto overflow-x-hidden scrollbar-none">
        <div className="flex flex-col gap-3">
          {repos.map((repo) => {
            const isFiltered = repo.name
              .toLowerCase()
              .includes(filter.toLowerCase())
            if (isFiltered) return <GitCard repo={repo} key={repo.name} />
          })}
        </div>

        {showLoadButton && (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1)
            }}
            className="mt-4 flex items-center justify-center gap-1 w-full"
          >
            {loading ? (
              <CustomLoading size={20} />
            ) : (
              <h1 className="font-semibold text-white border-b border-transparent hover:border-white ">
                more repositories
              </h1>
            )}
          </button>
        )}
      </section>

      <section className="flex justify-center pt-3 mt-3">
        <button className="p-3 flex items-center justify-center gap-3 bg-customRedBlack rounded-xl w-full">
          <Login02Icon color="white" />
          <h1 className="font-semibold text-white"> Log out </h1>
        </button>
      </section>
    </section>
  )
}
