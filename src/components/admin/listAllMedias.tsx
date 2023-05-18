import { useContext, useEffect } from 'react'
import { TMedia } from '../../types/media.type'
import { MediaContext } from '../../contexts/medias.context'
import Items from '../medias/item'

export function ListAllMedias() {
    const TOKEN = sessionStorage.getItem('token')
    const { media, setMedia } = useContext(MediaContext)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        }

        fetch(process.env.REACT_APP_URL_MEDIAS!, options)
            .then((response) => response.json())
            .then((response) => {
                setMedia(response.data as TMedia[])
            })
            .catch((err) => console.error(err))
    }, [])

    const lg = media.length

    return (
        <div>
            <Items medias={media} />
        </div>
    )
}
