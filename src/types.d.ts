import { Control } from 'react-hook-form'

export type ControlForm = Control<
  {
    tittle: string
    description: string
    lang: string
  },
  any
>

export interface Documentation {
  name: string
  documentation: string
  markdown: string
}
