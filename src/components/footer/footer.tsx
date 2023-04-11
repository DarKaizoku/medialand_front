export default function Footer() {
    return (
        <div className="container mt-3">
            <footer className="bg-dark text-center text-white fixed-bottom p-auto">
                <div className="container-fluid row text-center">
                    <div className="col-10 text-center p-3">
                        © 2023 Copyright:{' '}
                        <button
                            type="button"
                            className="btn btn-dark pt-0"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            {` W A M`}
                        </button>
                    </div>
                    <a className="Cpointer col-2" href="#">
                        <img
                            className="m-auto"
                            src="./images/icon-fleche-haut-64.png"
                            alt=""
                        />
                    </a>
                </div>
            </footer>

            {/*Modal du Copyright */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Copyright & Remerciements
                            </h1>
                            <button
                                type="button"
                                className="btn-close bg-light"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                favicon : icons8-des-médias-sociaux-64 depuis :
                                https://icones8.fr/
                                <br />
                                images background medias:
                                julius-drost-oC66vXsqnc8-unsplash depuis :
                                https://unsplash.com/fr
                                <br />
                                images background mur:
                                https://elements.envato.com/fr/user/hemul75
                                <br />
                                livres: Images de Freepik
                                <br />
                                Section Login :https://mdbootstrap.com
                                <br />
                                anipate-style
                                :https://github.com/animate-css/animate.css
                                <br />
                                canapé : Image de rawpixel.com sur Freepik
                                <br />
                                Logo :
                                https://www4.flamingtext.fr/Logo/Design-N%C3%A9on?_variations=true
                                <br />
                                image bg porte ouverte bleue : freepik
                                <br />
                                fond ecriture : "https://www.textstudio.fr/"
                                <br />
                                page Médias : via
                                https://elements.envato.com/fr/
                                <br />
                                K7audio : de Traint
                                <br />
                                Vinyle : de alienvalley
                                <br />
                                Livre : <br />
                                Freepik:
                                <br />
                                vinyl rouge : Image de claudiodiv2 <br />
                                vinyl vert : Image de claudiodiv2 <br />
                                creation gif :https://www.bloggif.com/
                                <br />
                                https://www.pexels.com
                                <br />
                                vinyl 999 : image de Brett Jordan
                                <br />
                                cassette audio noire SAX60 : de Pixabay
                                <br />
                                cassette audio -medias :Image de gstudioimagen
                                sur Freepik <br />
                                icon retour en haut de page : https://icones8.fr
                                <br />
                            </p>
                            <footer className="blockquote-footer">
                                Remerciements à{' '}
                                <cite title="Source Title">
                                    Kévin, Jean-Sebastien, Jean-Christophe,
                                    Stéphane et ma Dame !
                                </cite>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
