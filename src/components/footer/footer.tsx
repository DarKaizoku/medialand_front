import { useContext } from 'react'
import { PageContext } from '../../contexts/page.context'
import { TCompte } from '../../types/compte.type'

export default function Footer(props: {
    setCompte: (value: TCompte | undefined) => void
}) {
    const TOKEN = sessionStorage.getItem('token')
    const { setCompte } = props
    const { setPage } = useContext(PageContext)

    return (
        <div className="container mt-3">
            <footer className="bg-dark text-center text-white fixed-bottom">
                <div className="container-fluid row justify-content-between text-center m-0 p-0">
                    {TOKEN && (
                        <div className="col-2 col-lg-1 pt-2">
                            <img
                                className="m-auto Cpointer img-fluid"
                                src="./images/logout-V3.png"
                                alt="porte entreouverte"
                                title="Déconnexion"
                                onClick={() => {
                                    setPage('Accueil')
                                    sessionStorage.removeItem('token')
                                    setCompte(undefined)
                                }}
                            />
                        </div>
                    )}
                    {TOKEN && (
                        <div className="col-2 col-lg-1 pt-2">
                            <img
                                className="m-auto Cpointer img-fluid"
                                src="./images/compte.png"
                                alt="engrenage avec une silhouette en son centre"
                                title="Mon compte"
                                onClick={() => {
                                    setPage('MonCompte')
                                }}
                            />
                        </div>
                    )}
                    <div className="col-6 col-lg-9 text-center pt-3">
                        © 2023 Copyright:{' '}
                        <button
                            type="button"
                            className="btn btn-dark pt-0 border border-light-2"
                            data-bs-toggle="modal"
                            data-bs-target="#copyrightModal"
                        >
                            {` W A M`}
                        </button>
                    </div>
                    <a className="Cpointer col-2 col-lg-1 pt-2" href="#/">
                        <div>
                            <img
                                className="m-auto img-fluid"
                                src="./images/icon-fleche-haut-64.png"
                                alt="retour haut de page"
                                title="retour haut de page"
                            />
                        </div>
                    </a>
                </div>
            </footer>

            {/*Modal du Copyright */}
            <div
                className="modal fade"
                id="copyrightModal"
                tabIndex={-1}
                aria-labelledby="copyrightModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="copyrightModalLabel"
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
