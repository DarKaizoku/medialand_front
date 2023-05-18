import { useContext } from 'react'
import { MediaContext } from '../../contexts/medias.context'
import Items from '../medias/item'
import { TSupport } from '../../types/support.type'
export default function K7audioList() {
    const { media } = useContext(MediaContext)

    const listItems = media.filter(
        (data) => (data.support as TSupport).nom === 'K7-Audio'
    )

    return <Items medias={listItems} />
}
