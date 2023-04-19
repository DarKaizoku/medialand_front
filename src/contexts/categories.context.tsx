import { createContext, useState } from 'react'
import { TCategorie } from '../types/categorie.type'

interface CategorieContextProps {
    children: React.ReactElement
}

export interface CategorieContextInterface {
    categorie: TCategorie[]
    setCategorie: (value: TCategorie[]) => void
}

export const CategorieContext = createContext<CategorieContextInterface>({
    categorie: [],
    setCategorie: (value: TCategorie[]) => {},
})

export const CategorieProvider = ({ children }: CategorieContextProps) => {
    const [data, setData] = useState<TCategorie[]>([])

    const ModifCategorie = (elm: TCategorie[]) => {
        setData(elm)
    }

    const contextValue = {
        categorie: data,
        setCategorie: ModifCategorie,
    }

    return (
        <CategorieContext.Provider value={contextValue}>
            {children}
        </CategorieContext.Provider>
    )
}
