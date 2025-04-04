interface Props {
  className?: string
  title: string
  text: string
  icon: React.ReactNode
}

export function Card({ title, text, icon, className }: Props) {
  return (
    <div
      className={`flex flex-col gap-4 h-[260px] w-[330px] p-6 rounded-3xl bg-customBlueBlack ${className}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <h1 className="text-[24px] font-bold"> {title} </h1>
      </div>
      <DiscontinuosLine />
      <p className="text-[20px] font-semibold text-[#D4D4D4]"> {text} </p>
    </div>
  )
}

export function DiscontinuosLine() {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: 13 }).map(() => (
        <div className="w-5 h-[5px] bg-customBlueUltraBlack rounded-full"></div>
      ))}
    </div>
  )
}
