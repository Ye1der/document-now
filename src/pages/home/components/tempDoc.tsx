import { Skeleton } from '@/components/ui/skeleton'

export function TempDoc({ name }: { name: string }) {
  return (
    <Skeleton className="flex items-center w-full h-auto gap-2 p-2">
      <Skeleton className="w-5 h-5 rounded-[100%]" />
      <span className="font-normal text-[#707070]">{name}</span>
    </Skeleton>
  )
}
