import React, { useState } from 'react'
import { TMedia } from '../types/media.type'

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
    const mediaInit = {
        id: 0,
        duree: 0,
        description: '',
        titre: '',
        annee: 0,
        format: 0,
        support: {
            id: 0,
            nom: '',
        },

        categorie: [],

        auteur: [],
    } as TMedia

    const [data, setMedia] = useState<TMedia[]>([mediaInit])

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
