import { Dispatch, SetStateAction } from 'react'
import { Control } from 'react-hook-form'

export type Set<T> = Dispatch<SetStateAction<T>>

export type ControlForm = Control<
  {
    title: string
    description: string
    lang: string
  },
  any
>

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export interface Documentation {
  name: string
  documentation: string
  markdown: string
}
