import { BaseSyntheticEvent, useContext, useState } from 'react'
import { PageContext } from '../contexts/page.context'
import { TMedia } from '../types/media.type'
import Items from './medias/item'

export default function Search(props: { media: TMedia[] }) {
    const { page, setPage } = useContext(PageContext)
    const [word, setWord] = useState<string>('')
    const [result, setResult] = useState<TMedia[]>([])

    function research(e: BaseSyntheticEvent) {
        e.preventDefault()

        setResult(
            props.media.filter((data) =>
                data.titre.toLowerCase().includes(word)
            )
        )
    }
    console.log(word)

    return (
        <>
            <form className="m-3">
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value.toLowerCase())}
                    onClick={() => setPage('Accueil')}
                    placeholder="Nom de votre Média"
                />
                <button
                    type="submit"
                    className="ms-3 rounded"
                    onClick={(e) => research(e)}
                >
                    {' '}
                    Rechercher{' '}
                </button>
                <button
                    type="button"
                    className="ms-3 rounded"
                    onClick={() => {
                        setWord('')
                        setResult([])
                    }}
                >
                    {' '}
                    Effacer{' '}
                </button>
            </form>

            <Items medias={result} />
        </>
    )
}
