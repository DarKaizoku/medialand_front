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

export function AddMedia() {
    const TOKEN = localStorage.getItem('token')

    const { media, setMedia } = useContext(MediaContext)
    const { support } = useContext(SupportContext)
    const { categorie, setCategorie } = useContext(CategorieContext)
    const { auteur, setAuteur } = useContext(AuteurContext)

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
                return setNewMedia({
                    ...newMedia,
                    categorie: [parseInt(value)],
                })
            case 'auteur':
                return setNewMedia({ ...newMedia, auteur: [parseInt(value)] })
            default:
                setNewMedia({ ...newMedia, [name]: value })
                break
        }
    }

    //fct qui lance la fct fetch Medias:( BONNE PRATIQUE dixit Jérémy )
    const submitMedia = async (e: BaseSyntheticEvent) => {
        e.preventDefault()

        fetchData()
    }
    //fct FETCH Media
    async function fetchData() {
        setNewMedia({ ...newMedia, support: support.id }) // implémentation du numero du support choisi par l'user

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
        if (responseJson.status === 'SUCCESS') {
            console.log(responseJson.data)
        }
    }

    //fetch pour alimenter le select categorie :
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        }

        fetch('http://localhost:8000/categories', options)
            .then((response) => response.json())
            .then((response) => {
                setCategorie(response.data as TCategorie[])
            })
            .catch((err) => console.error(err))
    }, [])

    //Création de la liste de categorie filtrée par support :
    const listCategorieNom = categorie
        .filter((data) => data.support.id === support.id)
        .map((data, i) => (
            <option key={i} value={data.support.id}>
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

        fetch('http://localhost:8000/auteurs', options)
            .then((response) => response.json())
            .then((response) => {
                setAuteur(response.data as TAuteur[])
            })
            .catch((err) => console.error(err))
    }, [])

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
