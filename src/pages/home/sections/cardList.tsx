import { ScrollArea } from '@/components/ui/scroll-area'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface Props {
  loading: boolean
  children: React.ReactNode
  onIntersect?: () => void
  intersect?: boolean
}

export function CardList({
  loading,
  children,
  onIntersect = () => {},
  intersect = false,
}: Props) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onIntersect()
      }
    })
  }

  useEffect(() => {
    if (!scrollAreaRef.current) return

    const options: IntersectionObserverInit = {
      root: scrollAreaRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(callback, options)
    if (itemRef.current) observer.observe(itemRef.current)

    if (!intersect && itemRef.current) observer.unobserve(itemRef.current)

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current)
    }
  }, [scrollAreaRef, itemRef, intersect])

  return (
    <ScrollArea
      ref={scrollAreaRef}
      className={`
      w-full h-[350px] relative
      after:w-[93%] after:left-1/2 after:-translate-x-1/2 after:absolute after:h-8 after:top-0 after:bg-gradient-to-b after:from-background after:to-background/0
      before:z-30 before:w-[93%] before:left-1/2 before:-translate-x-1/2 before:absolute before:h-8 before:bottom-0 before:bg-gradient-to-t before:from-background before:to-background/0
    `}
    >
      <div className="relative flex flex-col items-center gap-4 px-5 py-5">
        {children}
        {loading ? (
          <span className="absolute bottom-0">
            <LoaderCircle size={30} className="animate-spin" />
          </span>
        ) : null}
      </div>
      <div ref={itemRef} className="w-full h-1"></div>
    </ScrollArea>
  )
}
