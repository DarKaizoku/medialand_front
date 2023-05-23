import {
    useContext,
    useState,
    BaseSyntheticEvent,
    ChangeEvent,
    useEffect,
} from 'react'

import { NEWMEDIA } from '../../constants/newMedia'
import { TNewMedia } from '../../types/newMedia.type'
import { SupportContext } from '../../contexts/supports.context'
import { CategorieContext } from '../../contexts/categories.context'
import { TCategorie } from '../../types/categorie.type'
import { TAuteur } from '../../types/auteur.type'
import { AuteurContext } from '../../contexts/auteurs.context'
import { MediaContext } from '../../contexts/medias.context'
import { PageContext } from '../../contexts/page.context'
import AddCategorie from './addCategorie'
import AddAuteur from './addAuteur'

export function AddMedia() {
    const TOKEN = sessionStorage.getItem('token')

    const { media, setMedia } = useContext(MediaContext)
    const { support } = useContext(SupportContext)
    const { categorie, setCategorie } = useContext(CategorieContext)
    const { auteur, setAuteur } = useContext(AuteurContext)
    const { page } = useContext(PageContext)

    const [newMedia, setNewMedia] = useState<TNewMedia>({
        ...NEWMEDIA,
        support: support.id,
    }) //object modifier à l'init car sinon décalage de 1 et donc mauvais support communiqué

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
            case 'categorie':
                if (parseInt(value)) {
                    return setNewMedia({
                        ...newMedia,
                        categorie: [parseInt(value)],
                    })
                }
                return setNewMedia({
                    ...newMedia,
                    categorie: [],
                })
            case 'auteur':
                if (parseInt(value)) {
                    return setNewMedia({
                        ...newMedia,
                        auteur: [parseInt(value)],
                    })
                }
                return setNewMedia({
                    ...newMedia,
                    categorie: [],
                })
            default:
                setNewMedia({ ...newMedia, [name]: value })
                break
        }
    }

    async function resetInput() {
        setNewMedia(NEWMEDIA)
    }

    //fct qui lance la fct fetch Medias:( BONNE PRATIQUE dixit Jérémy )
    const submitMedia = async (e: BaseSyntheticEvent) => {
        e.preventDefault()
        if (isNaN(newMedia.format)) {
            return alert('Merci de selectionner un format pour votre média !!')
        }

        fetchData()
    }
    //fct FETCH Media
    async function fetchData() {
        const response = await fetch(process.env.REACT_APP_URL_MEDIAS!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify(newMedia),
        })

        const responseJson = await response.json()

        if (responseJson.status === 'SUCCESS') {
            setMedia([...media, responseJson.data])
            setNewMedia({ ...NEWMEDIA, support: newMedia.support })
        }
        alert(responseJson.message)
    }

    //fetch pour alimenter le select categorie :
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        }

        fetch(
            process.env.REACT_APP_URL_CATEGORIES! + `/support/${support.id}`,
            options
        )
            .then((response) => response.json())
            .then((response) => {
                setCategorie(response.data as TCategorie[])
            })
            .catch((err) => console.error(err))
    }, [support, TOKEN, setCategorie])

    //Création de la liste de categorie filtrée par support :
    const listCategorieNom = categorie.map((data, i) => (
        <option key={i} value={data.id}>
            {data.nom}
        </option>
    ))

    //fetch pour alimenter le select auteur :
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        }

        fetch(process.env.REACT_APP_URL_AUTEURS!, options)
            .then((response) => response.json())
            .then((response) => {
                setAuteur(response.data as TAuteur[])
            })
            .catch((err) => console.error(err))
    }, [support, TOKEN, setAuteur])

    //Création de la liste d'auteurs
    const listAuteurs = auteur.map((data, i) => (
        <option key={i} value={data.id}>
            {data.nom}
        </option>
    ))

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
                                    ! Ajouter un Média de : {page} !
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
                                                value={newMedia.titre}
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
                                                value={newMedia.duree}
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
                                        value={newMedia.annee}
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
                                        value={newMedia.description}
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
                                        value={newMedia.emplacement}
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
                                    <option value={2}>
                                        Physique & Dématérialisé
                                    </option>
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
                                            name="categorie"
                                            onChange={inputChange}
                                            defaultValue={'selected'}
                                        >
                                            <option defaultValue={'selected'}>
                                                Selectionnez le.s catégorie.s de
                                                votre média
                                            </option>
                                            {listCategorieNom}
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
                                            name="auteur"
                                            onChange={inputChange}
                                            defaultValue={'selected'}
                                        >
                                            <option defaultValue={'selected'}>
                                                Selectionnez le.s auteur.e.s de
                                                votre média
                                            </option>
                                            {listAuteurs}
                                        </select>
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example99"
                                        >
                                            Auteur.e.s{' '}
                                        </label>
                                    </div>
                                    <AddCategorie support={support} />
                                    <AddAuteur />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    id="buttonR"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                        resetInput()
                                    }}
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
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
