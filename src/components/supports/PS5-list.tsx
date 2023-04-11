import { useContext } from 'react'
import { MediaContext } from '../../contexts/medias.context'
import Items from '../medias/items'
export default function PS5List() {
    const { media } = useContext(MediaContext)

    const listVinyl = media.filter((data) => data.support.nom === 'PS5')

    return <Items medias={listVinyl} />
}
