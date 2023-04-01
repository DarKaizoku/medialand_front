export default function Register(props: { setPage: (value: string) => void }) {

    return (
        <div>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block bg-dark">
                                        <img src="/images/register.gif"
                                            alt="Sample photo" className="img-fluid h-100 mx-auto"
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 bg-dark text-white ">
                                            <h3 className="mb-5 text-uppercase">Créez votre Compte MédiaLand !</h3>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="form3Example1m">Nom</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="form3Example1n">Prénom</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example9" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example9">Pseudo</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example90" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example90">Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example99" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example99">Mot de Passe</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example97" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example97">Confirmation du Mot de Passe</label>
                                            </div>

                                            <div className="row justify-content-around">
                                                <button type="button" className="btn btn-light col-4 m-2 btn-lg">Tout effacer</button>
                                                <button type="button" className="btn btn-light col-4 m-2 btn-lg"
                                                    onClick={() => props.setPage('Acceuil')}>Annuler</button>
                                                <button type="button" className="btn btn-warning col-4 m-2 btn-lg ms-2">Valider</button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}