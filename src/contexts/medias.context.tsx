import React, { useState } from 'react'
import { TMedia } from '../types/media.type'
import { MEDIAZERO } from '../constants/mediaZero'

interface MediaContextProps {
    children: React.ReactElement
}
export interface MediaContextInterface {
    media: TMedia[]
    setMedia: (value: TMedia[]) => void
}

export const MediaContext = React.createContext<MediaContextInterface>({
    media: [],
    setMedia: (value: TMedia[]) => {},
})

export const MediaProvider = ({ children }: MediaContextProps) => {
    const [data, setMedia] = useState<TMedia[]>([MEDIAZERO])

    const modifMedia = (media: TMedia[]) => {
        setMedia(media)
    }

    const contextValue = {
        media: data,
        setMedia: modifMedia,
    }

    return (
        <MediaContext.Provider value={contextValue}>
            {children}
        </MediaContext.Provider>
    )
}
