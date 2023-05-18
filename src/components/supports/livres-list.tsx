import { useContext } from 'react'
import { MediaContext } from '../../contexts/medias.context'
import Items from '../medias/item'
import { TSupport } from '../../types/support.type'
export default function LivreList() {
    const { media } = useContext(MediaContext)

    const listItems = media.filter(
        (data) => (data.support as TSupport).nom === 'Livre'
    )

    return <Items medias={listItems} />
}
