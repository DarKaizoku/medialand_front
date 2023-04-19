import { createContext, useState } from 'react'
import { TSupport } from '../types/support.type'

interface SupportContextProps {
    children: React.ReactElement
}

export interface SupportContextInterface {
    support: TSupport
    setSupport: (value: TSupport) => void
}

export const SupportContext = createContext<SupportContextInterface>({
    support: {
        id: -1,
        nom: '',
    },
    setSupport: (value: TSupport) => {},
})

export const SupportProvider = ({ children }: SupportContextProps) => {
    const [data, setData] = useState<TSupport>({
        id: -1,
        nom: '',
    })

    const ModifSupport = (elm: TSupport) => {
        setData(elm)
    }

    const contextValue = {
        support: data,
        setSupport: ModifSupport,
    }

    return (
        <SupportContext.Provider value={contextValue}>
            {children}
        </SupportContext.Provider>
    )
}
