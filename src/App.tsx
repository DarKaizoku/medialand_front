import { useEffect, useState, useContext } from 'react'
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
import { PageContext } from './contexts/page.context'
import Search from './components/search'

function App() {
    const TOKEN = sessionStorage.getItem('token')

    const { page } = useContext(PageContext)

    const [users, setUsers] = useState<TCompte[]>([])
    const [compte, setCompte] = useState<TCompte | undefined>()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
        }

        fetch(process.env.REACT_APP_URL_COMPTE!, options)
            .then((response) => response.json())
            .then((data) => {
                setCompte(data.data)
            })
            .catch((erreur) => `${erreur}`)

        const options2 = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
        }
        fetch(process.env.REACT_APP_URL_USERS!, options2)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.data)
            })
            .catch((erreur) => `${erreur}`)
    }, [page])

    return (
        <div>
            <div className="container h-100 text-center pb-5">
                {!TOKEN && page === 'Accueil' && <CarouselVideo />}

                <Neon />

                {page === 'Login' && <Login />}
                {page === 'Register' && <Register />}
                {page === 'MonCompte' && (
                    <ChangeUser compte={compte!} setCompte={setCompte} />
                )}
                {page === 'Accueil' && TOKEN && <Search />}
                {page === 'Accueil' && TOKEN && (
                    <RecupMedia
                        TOKEN={TOKEN!}
                        compte={compte!}
                        nbUsers={users?.length}
                    ></RecupMedia>
                )}

                {page === 'Vinyle' && <VinylesList />}
                {page === 'K7-Audio' && <K7audioList />}
                {page === 'Blu-ray' && <BlurayList />}
                {page === 'Livre' && <LivreList />}
                {page === 'PS5' && <PS5List />}
                {page === 'Super_Nintendo' && <SnesList />}
                {page === 'ListMedias' && <ListAllMedias />}
                {page === 'ListUsers' && (
                    <ListAllUsers users={users} setUsers={setUsers} />
                )}
            </div>
            <Footer setCompte={setCompte} />
        </div>
    )
}

export default App
