import { useContext } from 'react'
import { MediaContext } from '../../contexts/medias.context'
import Items from '../medias/item'
import { TSupport } from '../../types/support.type'
export default function PS5List() {
    const { media } = useContext(MediaContext)

    const listItems = media.filter(
        (data) => (data.support as TSupport).nom === 'PS5'
    )

    return <Items medias={listItems} />
}
