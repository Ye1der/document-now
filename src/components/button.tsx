import { cn } from '@/lib/utils'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: string
  onClick: () => void
}

export function Button({
  children,
  variant = '',
  onClick,
  className = '',
  ...props
}: Props) {
  const baseStyle =
    'bg-white text-black hover:bg-opacity-80 h-10 px-4 py-2 rounded-lg flex gap-3 items-center overflow-hidden transition-all duration-200'
  let variantStyle = ''

  if (variant === 'ghost') {
    variantStyle = 'bg-transparent text-white hover:bg-white hover:bg-opacity-5'
  }

  return (
    <button
      {...props}
      className={cn(baseStyle, variantStyle, className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
