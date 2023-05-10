import { useState } from 'react'

const urlLogin = 'http://localhost:8000/auth/login'

export default function Login(props: { setPage: (value: string) => void }) {
    const dataLogin = {
        username: '',
        password: '',
    }
    const [dataInput, setDataInput] = useState(dataLogin)

    const inputChange = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target

        setDataInput({ ...dataInput, [name]: value })
    }

    const submitData = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()

        async function fetchData() {
            const response = await fetch(urlLogin, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataInput),
            })

            const responseJson = await response.json()
            if (responseJson.statusCode === 401) {
                props.setPage('Accueil')
                return alert(responseJson.message)
            }
            const token = responseJson.access_token
            sessionStorage.setItem('token', token)

            props.setPage('Accueil')
        }
        fetchData()
    }

    return (
        <div>
            <section
                className="alert gradient-custom alert-dismissible p-3"
                role={'alert'}
            >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <form className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white rounded">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">
                                            Login
                                        </h2>
                                        <p className="text-white-50 mb-5">
                                            Merci de saisir votre Pseudo et
                                            votre Mot de Passe !
                                        </p>

                                        <div className="form-outline form-white">
                                            <label
                                                className="form-label"
                                                htmlFor="typeEmailX"
                                            >
                                                Pseudo
                                            </label>
                                            <input
                                                name="username"
                                                type="text"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                onChange={(e) => inputChange(e)}
                                            />
                                        </div>

                                        <p className="small pb-lg-2">
                                            <a
                                                className="text-white-50"
                                                href="#!"
                                            >
                                                Pseudo oublié ?
                                            </a>
                                        </p>

                                        <div className="form-outline form-white">
                                            <label
                                                className="form-label"
                                                htmlFor="typePasswordX"
                                            >
                                                Mot de Passe
                                            </label>
                                            <input
                                                name="password"
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                                onChange={(e) => inputChange(e)}
                                            />
                                        </div>

                                        <p className="small mb-5 pb-lg-2">
                                            <a
                                                className="text-white-50"
                                                href="#!"
                                            >
                                                Mot de Passe oublié ?
                                            </a>
                                        </p>

                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                            data-bs-dismiss="alert"
                                            onClick={(e) => submitData(e)}
                                        >
                                            Login
                                        </button>
                                        <br />
                                        <button
                                            className="btn btn-outline-light btn-sm px-5 mt-3"
                                            type="button"
                                            data-bs-dismiss="alert"
                                            onClick={() =>
                                                props.setPage('Accueil')
                                            }
                                        >
                                            Annuler
                                        </button>
                                    </div>

                                    <div>
                                        <p className="mb-0">
                                            Vous n'avez pas de Compte !<br />
                                            <a
                                                href="#!"
                                                className="text-white-50 fw-bold"
                                                onClick={() =>
                                                    props.setPage('Register')
                                                }
                                            >
                                                Enregistrez-vous
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
