import { Control } from 'react-hook-form'

export type ControlForm = Control<
  {
    type: string
    repo: string
    description: string
    apiKey: string
    lang: string
  },
  any
>
