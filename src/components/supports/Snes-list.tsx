import { useContext } from 'react'
import { MediaContext } from '../../contexts/medias.context'
import Items from '../medias/items'
export default function SnesList() {
    const { media } = useContext(MediaContext)

    const listVinyl = media.filter(
        (data) => data.support.nom === 'Super_Nintendo'
    )

    return <Items medias={listVinyl} />
}
