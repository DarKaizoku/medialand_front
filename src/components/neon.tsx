import { useContext } from 'react'
import { PageContext } from '../contexts/page.context'

export default function Neon() {
    const TOKEN = sessionStorage.getItem('token')

    const { setPage } = useContext(PageContext)
    return (
        <div className="container pe-0 align-self-center w-100">
            <img
                className="img-fluid Cpointer"
                src="./images/Neon.gif"
                alt="Logo MediaLand"
                title={TOKEN ? `Retour à l'accueil` : 'Login & Register'}
                onClick={() => (!TOKEN ? setPage('Login') : setPage('Accueil'))}
            />
        </div>
    )
}
