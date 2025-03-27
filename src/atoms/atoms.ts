import { IDocumentation } from '@/models/documentation'
import { atom } from 'jotai'

export const atomCurrentDoc = atom<IDocumentation>({} as IDocumentation)
export const atomDocIds = atom<string[]>([])
