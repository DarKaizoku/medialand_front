import { TCompte } from '../../types/compte.type'

export function ChangeUser(props: {
    setPage: (value: string) => void
    compte: TCompte
    setCompte: (value: TCompte) => void
}) {
    const { compte, setCompte } = props

    const inputChange = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target

        setCompte({ ...compte, [name]: value })
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
                                            >
                                                Tout effacer
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-light col-4 m-2 btn-lg"
                                                onClick={() =>
                                                    props.setPage('Accueil')
                                                }
                                            >
                                                Annuler
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-warning col-4 m-2 btn-lg ms-2"
                                                onClick={() =>
                                                    console.log(compte)
                                                }
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
