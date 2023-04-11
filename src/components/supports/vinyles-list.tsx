import { useContext } from 'react'
import { MediaContext } from '../../contexts/medias.context'
import Items from '../medias/items'
export default function VinylesList() {
    const { media } = useContext(MediaContext)

    const listVinyl = media.filter((data) => data.support.nom === 'Vinyle')

    return <Items medias={listVinyl} />
}
