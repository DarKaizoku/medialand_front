import { useContext, useState } from 'react'
import { TCompte } from '../../types/compte.type'
import { PageContext } from '../../contexts/page.context'

export function ChangeUser(props: {
    compte: TCompte
    setCompte: (value: TCompte) => void
}) {
    const { compte, setCompte } = props
    const TOKEN = sessionStorage.getItem('token')

    const { setPage } = useContext(PageContext)

    const [mdpOK, setMdpOK] = useState<string | undefined>()

    const inputChange = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target
        if (name !== 'passwordConfirmed') {
            setCompte({ ...compte, [name]: value })
        } else {
            setMdpOK(value)
        }
    }

    const update = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()

        if (!compte.password && compte.password !== mdpOK) {
            return alert('Vérifiez la saisie du mot de passe')
        }

        const jsonCompte = JSON.stringify(compte)

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
            body: jsonCompte,
        }

        fetch(process.env.REACT_APP_URL_UPDATE_UTILISATEUR!, options)
            .then((response) => response.json())
            .then((data) => setCompte(data))

            .catch((erreur) => `${erreur}`)

        alert('Votre compte a été modifié avec Succès !!')
        setPage('Accueil')
    }

    return (
        <section className="h-100 bg-dark mb-1">
            <div className="container h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                    <div className="col bg-dark">
                        <div className="card card-registration my-4 bg-dark">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block bg-dark">
                                    <img
                                        src="/images/register.gif"
                                        alt="animation plusieurs medias"
                                        className="img-fluid h-100 mx-auto"
                                    />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 bg-dark text-white ">
                                        <h3 className="mb-5 text-uppercase">
                                            Modifiez votre Compte !!
                                        </h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        name="nom"
                                                        placeholder="votre nom"
                                                        defaultValue={
                                                            compte.nom
                                                        }
                                                        className="form-control form-control-lg"
                                                        onChange={(e) =>
                                                            inputChange(e)
                                                        }
                                                        required
                                                    />
                                                    <label
                                                        className="form-label"
                                                        htmlFor="form3Example1m"
                                                    >
                                                        Nom
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        name="prenom"
                                                        placeholder="votre prénom"
                                                        defaultValue={
                                                            compte.prenom
                                                        }
                                                        className="form-control form-control-lg"
                                                        onChange={(e) =>
                                                            inputChange(e)
                                                        }
                                                        required
                                                    />
                                                    <label
                                                        className="form-label"
                                                        htmlFor="form3Example1n"
                                                    >
                                                        Prénom
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                name="username"
                                                defaultValue={compte.username}
                                                placeholder="votre pseudo/identifiant"
                                                className="form-control form-control-lg"
                                                onChange={(e) => inputChange(e)}
                                                required
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example9"
                                            >
                                                Pseudo
                                            </label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                name="email"
                                                defaultValue={compte.email}
                                                placeholder="@"
                                                className="form-control form-control-lg"
                                                onChange={(e) => inputChange(e)}
                                                required
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example90"
                                            >
                                                Email
                                            </label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="8 caractère minimum"
                                                className="form-control form-control-lg"
                                                onChange={(e) => inputChange(e)}
                                                required
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example99"
                                            >
                                                Nouveau Mot de Passe
                                            </label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                name="passwordConfirmed"
                                                placeholder="8 caractère minimum"
                                                className="form-control form-control-lg"
                                                onChange={(e) => inputChange(e)}
                                                required
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form3Example97"
                                            >
                                                Confirmation du Nouveau Mot de
                                                Passe
                                            </label>
                                        </div>

                                        <div className="row justify-content-around">
                                            <button
                                                type="button"
                                                className="btn btn-light col-4 m-2 btn-lg"
                                                onClick={() =>
                                                    setPage('Accueil')
                                                }
                                            >
                                                Annuler
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-warning col-4 m-2 btn-lg ms-2"
                                                onClick={(e) => update(e)}
                                            >
                                                Valider
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
