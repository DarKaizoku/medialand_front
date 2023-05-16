import { useContext, useState } from 'react'
import { TMedia } from '../../types/media.type'
import { MediaContext } from '../../contexts/medias.context'

export function ChangeItem(props: { leMedia: TMedia }) {
    const { leMedia } = props
    type TnewMedia = Partial<TMedia>

    const { media, setMedia } = useContext(MediaContext)

    //const leMedia = media.filter((data) => data.id === props.leMedia)[0]!

    const TOKEN = sessionStorage.getItem('token')

    const [newMedia, setNewMedia] = useState<TnewMedia | undefined>()
    //const [duree, setDuree] = useState('')

    const inputChange = (e: React.BaseSyntheticEvent) => {
        // a verifier
        const { name, value } = e.target

        if (name === 'duree') {
            //setDuree(value)
            return setNewMedia({ ...newMedia, duree: parseInt(value) })
        }

        if (name === 'annee') {
            return setNewMedia({ ...newMedia, annee: +value })
        }

        setNewMedia({ ...newMedia, [name]: value })
    }

    const updateItem = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()

        async function fetchData() {
            const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${TOKEN}`,
                },
                body: JSON.stringify(newMedia),
            }

            const response = await fetch(
                `http://localhost:8000/medias/${leMedia.id}`,
                options
            )

            const responseJson = await response.json()
            alert(responseJson.message)

            const newList = media.filter(
                (data) => data.id !== (responseJson.data as TMedia).id
            )
            setMedia([...newList, responseJson.data])
        }
        fetchData()
    }

    if (!leMedia) {
        return null
    }

    return (
        <div className="col-6">
            <button
                type="button"
                className="btn btn-warning btn-sm"
                data-bs-toggle="modal"
                data-bs-target={`#updateModal${leMedia.id}`}
            >
                Modifier
            </button>
            <div
                className="modal"
                id={`updateModal${leMedia.id}`}
                tabIndex={-1}
                aria-labelledby="updateModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="updateModalLabel"
                            >
                                ! Modifier votre Média !
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            name="titre"
                                            placeholder="..."
                                            className="form-control form-control-lg"
                                            defaultValue={leMedia.titre}
                                            onChange={inputChange}
                                            required
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example1m"
                                        >
                                            Titre
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <input
                                            type="number"
                                            name="duree"
                                            placeholder="durée en minutes"
                                            className="form-control form-control-lg"
                                            defaultValue={leMedia.duree}
                                            onChange={inputChange}
                                            required
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example1n"
                                        >
                                            Durée
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-outline mb-4">
                                <input
                                    type="number"
                                    name="annee"
                                    placeholder="année de création/publication"
                                    className="form-control form-control-lg"
                                    defaultValue={leMedia.annee}
                                    onChange={inputChange}
                                    required
                                />
                                <label
                                    className="form-label"
                                    htmlFor="form3Example9"
                                >
                                    Année
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="description/avis sur le média"
                                    className="form-control form-control-lg"
                                    defaultValue={leMedia.description}
                                    onChange={inputChange}
                                    required
                                />
                                <label
                                    className="form-label"
                                    htmlFor="form3Example90"
                                >
                                    Description
                                </label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    name="emplacement"
                                    placeholder="Où est rangé ce média ?"
                                    className="form-control form-control-lg"
                                    defaultValue={leMedia.emplacement}
                                    onChange={inputChange}
                                    required
                                />
                                <label
                                    className="form-label"
                                    htmlFor="form3Example99"
                                >
                                    Emplacement{' '}
                                </label>
                            </div>

                            <select
                                className="form-select"
                                name="format"
                                onClick={(e) =>
                                    setNewMedia({
                                        ...newMedia,
                                        format: parseInt(e.currentTarget.value),
                                    })
                                }
                                defaultValue={leMedia.format}
                            >
                                <option value={-1}>
                                    Selectionnez le format de votre média
                                </option>
                                <option value={0}>Physique</option>
                                <option value={1}>Dématérialisé</option>
                                <option value={2}>les deux !!</option>
                            </select>
                            <label
                                className="form-label"
                                htmlFor="form3Example99"
                            >
                                Format{' '}
                            </label>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Annuler
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={(e) => updateItem(e)}
                            >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
