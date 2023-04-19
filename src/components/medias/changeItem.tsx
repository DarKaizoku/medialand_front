import { useContext, useState } from 'react'
import { NEWMEDIA } from '../../constants/newMedia'
import { SupportContext } from '../../contexts/supports.context'
import { TMedia } from '../../types/media.type'
import { TNewMedia } from '../../types/newMedia.type'

export function ChangeItem(props: { leMedia: TMedia }) {
    const { leMedia } = props
    const { support } = useContext(SupportContext)
    const TOKEN = localStorage.getItem('token')
    const [newMedia, setNewMedia] = useState<TNewMedia>(NEWMEDIA)
    const [duree, setDuree] = useState('')
    const [format, setFormat] = useState(-1)
    const [annee, setAnnee] = useState('')

    const inputChange = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target

        if (name === 'duree') {
            setDuree(value)
        }
        /* if (name === 'format') {
            setFormat(value)
        } */

        if (name === 'annee') {
            setAnnee(value)
        }

        setNewMedia({ ...newMedia, [name]: value })

        // passage des chaine de caractère en nombre pour le back
        setNewMedia({ ...newMedia, duree: parseInt(duree) })
        setNewMedia({ ...newMedia, format: format })
        setNewMedia({ ...newMedia, annee: parseInt(annee) })
    }

    return (
        <div className="col-6">
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
            >
                Modifier
            </button>
            <div
                className="modal fade"
                id="updateModal"
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
                                onChange={(e) =>
                                    setFormat(parseInt(e.currentTarget.value))
                                }
                                value={format}
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
                        >
                            Enregistrer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
