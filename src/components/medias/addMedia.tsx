import { useContext, useState, BaseSyntheticEvent, ChangeEvent } from 'react'

import { NEWMEDIA } from '../../constants/newMedia'
import { TNewMedia } from '../../types/newMedia.type'
import { SupportContext } from '../../contexts/supports.context'

export function AddMedia() {
    const { support } = useContext(SupportContext)
    const TOKEN = localStorage.getItem('token')
    const [newMedia, setNewMedia] = useState<TNewMedia>(NEWMEDIA)

    const inputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target

        switch (name) {
            case 'annee':
                return setNewMedia({ ...newMedia, annee: parseInt(value) })

            case 'duree':
                return setNewMedia({ ...newMedia, duree: parseInt(value) })
            case 'format':
                return setNewMedia({ ...newMedia, format: parseInt(value) })
            default:
                setNewMedia({ ...newMedia, [name]: value })
                break
        }
    }

    const submitMedia = (e: BaseSyntheticEvent) => {
        e.preventDefault()

        setNewMedia({ ...newMedia, support: support.id })

        async function fetchData() {
            console.log('data', newMedia)
            const response = await fetch('http://localhost:8000/medias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${TOKEN}`,
                },
                body: JSON.stringify(newMedia),
            })

            const responseJson = await response.json()

            alert(responseJson.message)
        }
        fetchData()
    }

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary m-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Ajouter un média
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-white">
                        <form>
                            <div className="modal-header">
                                <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                >
                                    ! Ajouter un Média !
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close bg-light"
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
                                                pattern="[0-9]*"
                                                name="duree"
                                                placeholder="durée en minutes"
                                                className="form-control form-control-lg"
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
                                        pattern="[0-9]*"
                                        name="annee"
                                        placeholder="année de création/publication"
                                        className="form-control form-control-lg"
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
                                    onChange={inputChange}
                                    defaultValue={'selected'}
                                >
                                    <option defaultValue={'selected'}>
                                        Selectionnez le format de votre média
                                    </option>
                                    <option value={0}>Physique</option>
                                    <option value={1}>Dématérialisé</option>
                                    <option value={2}>les deux !!</option>
                                </select>
                                <label
                                    className="form-label mb-4"
                                    htmlFor="form3Example99"
                                >
                                    Format{' '}
                                </label>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <select
                                            className="form-select"
                                            name="format"
                                            onChange={inputChange}
                                            defaultValue={'selected'}
                                        >
                                            <option defaultValue={'selected'}>
                                                Selectionnez le.s catégorie.s de
                                                votre média
                                            </option>
                                            <option value={0}>Physique</option>
                                            <option value={1}>
                                                Dématérialisé
                                            </option>
                                            <option value={2}>
                                                les deux !!
                                            </option>
                                        </select>
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example99"
                                        >
                                            Catégorie.s{' '}
                                        </label>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <select
                                            className="form-select"
                                            name="format"
                                            onChange={inputChange}
                                            defaultValue={'selected'}
                                        >
                                            <option defaultValue={'selected'}>
                                                Selectionnez le.s auteur.e.s de
                                                votre média
                                            </option>
                                            <option value={0}>Physique</option>
                                            <option value={1}>
                                                Dématérialisé
                                            </option>
                                            <option value={2}>
                                                les deux !!
                                            </option>
                                        </select>
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example99"
                                        >
                                            Auteur.e.s{' '}
                                        </label>
                                    </div>
                                </div>
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
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={(e) => submitMedia(e)}
                                >
                                    Ajouter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
