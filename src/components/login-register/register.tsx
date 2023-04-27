import { useState } from 'react'
import { TUtilisateur } from '../../types/utilisateur.type'
import AddUser from '../functions/adduser'

const urlAddUser = 'http://localhost:8000/utilisateurs/register'

export default function Register(props: { setPage: (value: string) => void }) {
    const [user, setUser] = useState<TUtilisateur>()
    const [active, setActive] = useState('')

    const inputChange = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target

        setUser({ ...user!, [name]: value })
    }

    async function AddUser() {
        if (user!.password !== user!.passwordConfirmed) {
            return alert('Merci de vérifier votre mot de passe !!')
        }

        async function fetchData() {
            const response = await fetch(urlAddUser, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })

            const responseJson = await response.json()

            if (responseJson.status === 'SUCCESS') {
                alert(responseJson.message)
                return setActive('OK')
            }
            alert(responseJson.message)
        }
        fetchData()
        return
    }

    if (active === 'OK') {
        props.setPage('Login')
    }

    return (
        <div>
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
                                                Créez votre Compte MédiaLand !
                                            </h3>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            name="nom"
                                                            placeholder="votre nom"
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
                                                    placeholder="votre pseudo/identifiant"
                                                    className="form-control form-control-lg"
                                                    onChange={(e) =>
                                                        inputChange(e)
                                                    }
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
                                                    placeholder="@"
                                                    className="form-control form-control-lg"
                                                    onChange={(e) =>
                                                        inputChange(e)
                                                    }
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
                                                    onChange={(e) =>
                                                        inputChange(e)
                                                    }
                                                    required
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="form3Example99"
                                                >
                                                    Mot de Passe
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    name="passwordConfirmed"
                                                    placeholder="8 caractère minimum"
                                                    className="form-control form-control-lg"
                                                    onChange={(e) =>
                                                        inputChange(e)
                                                    }
                                                    required
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="form3Example97"
                                                >
                                                    Confirmation du Mot de Passe
                                                </label>
                                            </div>

                                            <div className="row justify-content-around">
                                                <button
                                                    type="button"
                                                    className="btn btn-light col-4 m-2 btn-lg"
                                                    onClick={() =>
                                                        props.setPage('Login')
                                                    }
                                                >
                                                    Annuler
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-warning col-4 m-2 btn-lg ms-2"
                                                    onClick={async () => {
                                                        AddUser()
                                                    }}
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
        </div>
    )
}
