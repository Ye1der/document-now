interface Props {
  children: React.ReactNode
}

export function DocumentsLayout({ children }: Props) {
  return (
    <div className="grid h-full py-6 mx-10 overflow-auto grid-cols-layout">
      {children}
    </div>
  )
}
