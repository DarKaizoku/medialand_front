import { SyntheticEvent, useContext, useState } from 'react'
import { TSupport } from '../../types/support.type'
import { TCategorie } from '../../types/categorie.type'
import { NEWMEDIA } from '../../constants/newMedia'
import { CategorieContext } from '../../contexts/categories.context'

export default function AddCategorie(props: { support: TSupport }) {
    const TOKEN = sessionStorage.getItem('token')
    const { support } = props
    const { categorie, setCategorie } = useContext(CategorieContext)

    const [clicked, setClicked] = useState<string>('')
    const [input, setInput] = useState<string>('')

    function addCategorie(e: SyntheticEvent) {
        e.preventDefault()
        console.log(input, support.id)

        const newCategorie: Partial<TCategorie> = {
            nom: input,
            support: support.id,
        }
        fetchData(newCategorie)
    }

    async function fetchData(newCategorie: Partial<TCategorie>) {
        const response = await fetch('http://localhost:8000/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify(newCategorie),
        })

        const responseJson = await response.json()

        alert(responseJson.message)
        if (responseJson.status === 'SUCCESS') {
            setCategorie([...categorie, responseJson.data])
            setInput('')
        }
    }
    return (
        <div>
            {clicked !== 'OK' && (
                <div className="d-flex justify-content-center">
                    <img
                        src="./images/Ajout.png"
                        className="Cpointer"
                        onClick={() => setClicked('OK')}
                    />
                    <h4 className="m-2">Ajouter une catégorie</h4>
                </div>
            )}
            {clicked === 'OK' && (
                <div>
                    <input
                        name="cat"
                        type="text"
                        placeholder="Saisir nouvelle Catégorie"
                        defaultValue={input}
                        onChange={(e) => setInput(e.currentTarget.value)}
                    ></input>

                    <button
                        className="ms-3 rounded"
                        type="submit"
                        onClick={(e) => addCategorie(e)}
                    >
                        Ajouter
                    </button>
                    <button
                        className="ms-3 rounded"
                        type="submit"
                        onClick={(e) => {
                            setClicked('')
                            setInput('')
                        }}
                    >
                        Annuler
                    </button>
                </div>
            )}
        </div>
    )
}
