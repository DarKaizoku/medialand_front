import { useState } from 'react'
import './App.css'

import Login from './components/login-register/login'
import Neon from './components/neon'
import Register from './components/login-register/register'

import { TUtilisateur } from './types/utilisateur.type'
import RecupMedia from './components/medias/recupMedia'
import Footer from './components/footer/footer'
import CarouselVideo from './components/carouselVideo'
import VinylesList from './components/vinyles/vinyle-list'
import { TMedia } from './types/media.type'

function App() {
    const TOKEN = localStorage.getItem('token')

    const newMedia: TMedia = {
        id: 0,
        duree: 0,
        description: '',
        titre: '',
        annee: 0,
        format: 0,
        support: {
            id: 0,
            nom: '',
        },

        categorie: [],

        auteur: [],
    }

    const [page, setPage] = useState<string>('Accueil')
    const [user, setUser] = useState<TUtilisateur>()
    const [media, setMedia] = useState<TMedia[]>([newMedia])

    console.log(page)

    return (
        <div>
            <div className="container h-100 text-center footerLess">
                {!TOKEN && <CarouselVideo />}
                {page === 'Login' && <Login setPage={setPage} />}
                <Neon TOKEN={TOKEN} setPage={setPage} />

                {page === 'Register' && (
                    <Register
                        setPage={setPage}
                        setUser={setUser}
                        user={user!}
                    />
                )}
                {(page === 'Medias' || TOKEN) && (
                    <RecupMedia
                        TOKEN={TOKEN!}
                        setPage={setPage}
                        media={media}
                        setMedia={setMedia}
                    ></RecupMedia>
                )}

                {page === 'listVinyl' && (
                    <VinylesList media={media}></VinylesList>
                )}
                {/*
            {page === '' && <Livre></Livre>}
            {page === '' && <K7audio></K7audio>}
            {page === '' && <K7video></K7video>} */}
            </div>
            <Footer />
        </div>
    )
}

export default App
