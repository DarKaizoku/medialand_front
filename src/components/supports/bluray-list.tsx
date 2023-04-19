import { useContext } from 'react'
import { MediaContext } from '../../contexts/medias.context'
import Items from '../medias/items'
import { TSupport } from '../../types/support.type'
export default function BlurayList() {
    const { media } = useContext(MediaContext)

    const listVinyl = media.filter(
        (data) => (data.support as TSupport).nom === 'Blu-ray'
    )

    return <Items medias={listVinyl} />
}
