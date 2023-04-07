import { useState, createContext } from 'react'
import { VinylContexttype } from '../types/vinylContextType'
/* 
export const VinylProviderContext = createContext<VinylContexttype>(null!)

export const VinylProvider : React.FC<React.ReactNode> = ({ children } : any) => {
  const [vinyl, setVinyl] = useState<string>('normal')

  const handleChangeView = (value:string) => {
    setVinyl(value)
  }

  const value = {
    vinyl,
    handleChangeView,
  }

  return <VinylProviderContext.Provider value={value}> {children} </VinylProviderContext.Provider>
} */