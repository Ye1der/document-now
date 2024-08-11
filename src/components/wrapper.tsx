interface Props {
  children: React.ReactNode
  size?: number
}

export function Wrapper({ children, size = 1100 }: Props) {
  return (
    <div
      style={{ maxInlineSize: `${size}px` }}
      className={`flex-1 w-full mx-auto`}
    >
      {children}
    </div>
  )
}
