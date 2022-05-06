import { createContext, useContext } from 'react'

import * as Floating from './floating'

export type UseFloatingFn = typeof Floating.useFloating

type UseFloatingProps = UseFloatingFn extends (props: infer Props) => any ? Props : never

export type UseFloatingResult = ReturnType<UseFloatingFn> & {
  getFloatingProps?: (props: { ref: any; [key: string]: any }) => any
  getReferenceProps?: (props: { ref: any; [key: string]: any }) => any
}

export const FloatingOverrideContext = createContext<UseFloatingFn | null>(null)

export const useFloating = (props: UseFloatingProps): UseFloatingResult => {
  const context = useContext(FloatingOverrideContext)
  return (context || Floating.useFloating)?.(props)
}
