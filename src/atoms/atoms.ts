import { IDocumentation } from '@/models/documentation'
import { atom } from 'jotai'

export const atomCurrentDoc = atom<IDocumentation | null>(null)
export const atomDocIds = atom<string[]>([])
