import { createContext, useState } from 'react'

interface SupportContextProps {
    children: React.ReactElement
}

export interface SupportContextInterface {
    support: number
    setSupport: (value: number) => void
}

export const SupportContext = createContext<SupportContextInterface>({
    support: -1,
    setSupport: (value: number) => {},
})

export const SupportProvider = ({ children }: SupportContextProps) => {
    const [data, setData] = useState<number>(-1)

    const ModifSupport = (elm: number) => {
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
