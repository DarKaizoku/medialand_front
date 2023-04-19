import { createContext, useState } from 'react'
import { TAuteur } from '../types/auteur.type'

interface AuteurContextProps {
    children: React.ReactElement
}

export interface AuteurContextInterface {
    auteur: TAuteur[]
    setAuteur: (valeur: TAuteur[]) => void
}

export const AuteurContext = createContext<AuteurContextInterface>({
    auteur: [],
    setAuteur: (value: TAuteur[]) => {},
})

export const AuteurProvider = ({ children }: AuteurContextProps) => {
    const [data, setData] = useState<TAuteur[]>([])

    const ModifAuteur = (elm: TAuteur[]) => {
        setData(elm)
    }

    const contextValue = {
        auteur: data,
        setAuteur: ModifAuteur,
    }

    return (
        <AuteurContext.Provider value={contextValue}>
            {children}
        </AuteurContext.Provider>
    )
}
