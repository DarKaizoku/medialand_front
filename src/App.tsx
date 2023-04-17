import { useEffect, useState } from 'react'
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
import { ChangeUser } from './components/login-register/changeUser'
import { TCompte } from './types/compte.type'
import { SupportProvider } from './contexts/support.context'

function App() {
    const TOKEN = localStorage.getItem('token')

    const [page, setPage] = useState<string>('Accueil')
    const [user, setUser] = useState<TUtilisateur>()
    const [compte, setCompte] = useState<TCompte | undefined>()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
        }

        fetch('http://localhost:8000/utilisateurs/moncompte', options)
            .then((response) => response.json())
            .then((data) => {
                setCompte(data.data)
            })
            .catch((erreur) => `${erreur}`)
    }, [page])

    //voir pour poser les providers dans l'index, plus globaux p^lus claire
    return (
        <MediaProvider>
            <SupportProvider>
                <div>
                    <div className="container h-100 text-center pb-5">
                        {!TOKEN && <CarouselVideo />}

                        <Neon TOKEN={TOKEN} setPage={setPage} />

                        {page === 'Login' && <Login setPage={setPage} />}
                        {page === 'Register' && (
                            <Register
                                setPage={setPage}
                                setUser={setUser}
                                user={user!}
                            />
                        )}
                        {page === 'MonCompte' && (
                            <ChangeUser
                                setPage={setPage}
                                compte={compte!}
                                setCompte={setCompte}
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
                    <Footer setPage={setPage} setCompte={setCompte} />
                </div>
            </SupportProvider>
        </MediaProvider>
    )
}

export default App
