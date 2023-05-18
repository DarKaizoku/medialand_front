import { useContext } from 'react'
import { MediaContext } from '../../contexts/medias.context'
import Items from '../medias/item'
import { TSupport } from '../../types/support.type'
export default function SnesList() {
    const { media } = useContext(MediaContext)

    const listItems = media.filter(
        (data) => (data.support as TSupport).nom === 'Super_Nintendo'
    )
    return <Items medias={listItems} />
}
