import { Button, type ButtonProps } from './ui/button'
import { Loader2 } from 'lucide-react'

interface Props extends ButtonProps {
  loading: boolean
  children: React.ReactNode
}

export function ButtonLoading({ loading, children, ...props }: Props) {
  return (
    <Button {...props} disabled={loading}>
      {loading ? (
        <>
          Loading... <Loader2 className="w-4 h-4 ml-2 animate-spin" />
        </>
      ) : (
        children
      )}
    </Button>
  )
}
