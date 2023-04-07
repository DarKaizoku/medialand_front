import React, { useState } from "react";
import { TMedia } from "../types/media.type";
import { TSupport } from "../types/support.type";


/* interface MediaContextProps {
    children: React.ReactElement
}
export interface MediaContextInterface {
    mediaInit: null,
    setMediaInit: (value: TMedia[] | null) => void
}

export const MediaContext = React.createContext<MediaContextInterface>({
    mediaInit: null,
    setMediaInit: (value: TMedia[] | null) => { }
})

export const MediaProvider = ({ children}: MediaContextProps ) => {

        const [media,setMedia] = useState<TMedia | null>(null)

        const modifMedia = (media : TMedia | null) => {
            setMedia(media)
        }

        const contextValue ={
            mediaInit : media,
            setMediaInit : modifMedia
        }

    return (
        <MediaContext.Provider value:{contextValue}> {children}</MediaContext.Provider>
    )
} */