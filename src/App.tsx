import { useState } from 'react'
import './App.css'

import Login from './components/login-register/login'
import Neon from './components/neon'
import Register from './components/login-register/register'

import { TUtilisateur } from './types/utilisateur.type'
import RecupMedia from './components/medias/recupMedia'
import Footer from './components/footer/footer'
import CarouselVideo from './components/carouselVideo'
import VinylesList from './components/supports/vinyles-list'
import { MediaProvider } from './contexts/medias.context'
import K7audioList from './components/supports/K7audio-list'
import BlurayList from './components/supports/bluray-list'
import LivreList from './components/supports/livres-list'
import PS5List from './components/supports/PS5-list'
import SnesList from './components/supports/Snes-list'

function App() {
    const TOKEN = localStorage.getItem('token')

    const [page, setPage] = useState<string>('Accueil')
    const [user, setUser] = useState<TUtilisateur>()
    //const [media, setMedia] = useState<TMedia[]>([newMedia])

    return (
        <MediaProvider>
            <div>
                <div className="container h-100 text-center pb-5">
                    {!TOKEN && page === 'Accueil' && <CarouselVideo />}

                    <Neon TOKEN={TOKEN} setPage={setPage} />

                    {page === 'Login' && <Login setPage={setPage} />}
                    {page === 'Register' && (
                        <Register
                            setPage={setPage}
                            setUser={setUser}
                            user={user!}
                        />
                    )}
                    {TOKEN && (
                        <RecupMedia
                            TOKEN={TOKEN!}
                            setPage={setPage}
                        ></RecupMedia>
                    )}

                    {page === 'Vinyles' && <VinylesList />}
                    {page === 'K7audio' && <K7audioList />}
                    {page === 'Blu-ray' && <BlurayList />}
                    {page === 'Livres' && <LivreList />}
                    {page === 'PS5' && <PS5List />}
                    {page === 'Snes' && <SnesList />}
                </div>
                <Footer setUser={setUser} setPage={setPage} />
            </div>
        </MediaProvider>
    )
}

export default App
