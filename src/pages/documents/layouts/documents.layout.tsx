interface Props {
  children: React.ReactNode
}

export function DocumentsLayout({ children }: Props) {
  return (
    <div className="grid h-full gap-8 py-6 mx-10 overflow-auto grid-cols-layout">
      {children}
    </div>
  )
}
