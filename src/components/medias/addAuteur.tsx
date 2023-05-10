import { SyntheticEvent, useContext, useState } from 'react'
import { TSupport } from '../../types/support.type'
import { AuteurContext } from '../../contexts/auteurs.context'
import { TAuteur } from '../../types/auteur.type'

export default function AddAuteur() {
    const TOKEN = sessionStorage.getItem('token')
    const { auteur, setAuteur } = useContext(AuteurContext)

    const [clicked, setClicked] = useState<string>('')
    const [input, setInput] = useState<string>('')

    function addAuteur(e: SyntheticEvent) {
        e.preventDefault()
        const newAuteur: Partial<TAuteur> = {
            nom: input,
        }
        fetchData(newAuteur)
        setInput('')
    }

    async function fetchData(newAuteur: Partial<TAuteur>) {
        const response = await fetch('http://localhost:8000/Auteurs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify(newAuteur),
        })

        const responseJson = await response.json()

        alert(responseJson.message)
        if (responseJson.status === 'SUCCESS') {
            setAuteur([...auteur, responseJson.data])
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
                    <h4 className="m-2 me-3">Ajouter un.e auteur.e </h4>
                </div>
            )}
            {clicked === 'OK' && (
                <div>
                    <input
                        name="cat"
                        type="text"
                        placeholder="Saisir ici ..."
                        defaultValue={input}
                        onChange={(e) => setInput(e.currentTarget.value)}
                    ></input>

                    <button
                        className="ms-3 rounded"
                        type="submit"
                        onClick={(e) => addAuteur(e)}
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
