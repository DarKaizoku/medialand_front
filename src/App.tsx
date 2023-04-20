import { useEffect, useState } from 'react'
import './App.css'

import Login from './components/login-register/login'
import Neon from './components/neon'
import Register from './components/login-register/register'
import RecupMedia from './components/medias/recupMedia'
import Footer from './components/footer/footer'
import CarouselVideo from './components/carouselVideo'
import VinylesList from './components/supports/vinyles-list'
import K7audioList from './components/supports/K7audio-list'
import BlurayList from './components/supports/bluray-list'
import LivreList from './components/supports/livres-list'
import PS5List from './components/supports/PS5-list'
import SnesList from './components/supports/Snes-list'
import { ChangeUser } from './components/login-register/changeUser'
import { TCompte } from './types/compte.type'
import { ListAllMedias } from './components/admin/listAllMedias'
import { ListAllUsers } from './components/admin/listAllUsers'

function App() {
    const TOKEN = localStorage.getItem('token')

    const [page, setPage] = useState<string>('Accueil')
    const [nbUsers, setNbUsers] = useState<number>(0)
    const [users, setUsers] = useState([])
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

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
        }

        fetch('http://localhost:8000/utilisateurs/users', options)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.data)
            })
            .catch((erreur) => `${erreur}`)

        setNbUsers(users.length)
    }, [])

    return (
        <div>
            <div className="container h-100 text-center pb-5">
                {!TOKEN && <CarouselVideo />}

                <Neon setPage={setPage} />

                {page === 'Login' && <Login setPage={setPage} />}
                {page === 'Register' && <Register setPage={setPage} />}
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
                        compte={compte!}
                        nbUsers={nbUsers}
                    ></RecupMedia>
                )}

                {page === 'Vinyle' && <VinylesList />}
                {page === 'K7-Audio' && <K7audioList />}
                {page === 'Blu-ray' && <BlurayList />}
                {page === 'Livre' && <LivreList />}
                {page === 'PS5' && <PS5List />}
                {page === 'Snes' && <SnesList />}
                {page === 'ListMedias' && <ListAllMedias />}
                {page === 'ListUsers' && (
                    <ListAllUsers setNbUsers={setNbUsers} />
                )}
            </div>
            <Footer setPage={setPage} setCompte={setCompte} />
        </div>
    )
}

export default App
