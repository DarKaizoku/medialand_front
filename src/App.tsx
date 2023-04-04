import { useState } from 'react'
import './App.css'

import Login from './components/login-register/login'
import Neon from './components/neon'
import Register from './components/login-register/register'

import { TUtilisateur } from './types/utilisateur.type'
import RecupMedia from './components/medias/recupMedia'
import Footer from './components/footer/footer'
import CarouselVideo from './components/vinyles/carouselVideo'

function App() {
    const TOKEN = localStorage.getItem('token')

    const [page, setPage] = useState<string>('Accueil')
    const [user, setUser] = useState<TUtilisateur>()

    return (
        <div>
            <div className="container h-100 text-center">
                {!TOKEN && <CarouselVideo />}
                {page === 'Login' && <Login setPage={setPage} />}
                <Neon setPage={setPage} />

                {page === 'Register' && (
                    <Register
                        setPage={setPage}
                        setUser={setUser}
                        user={user!}
                    />
                )}
                {(page === 'Medias' || TOKEN) && (
                    <RecupMedia TOKEN={TOKEN!}></RecupMedia>
                )}
                {/* {page !== 'listVinyl' && <VinylClick setPage={setPage}></VinylClick>}
            {page === 'listVinyl' && <VinylesList></VinylesList>}
            {page === '' && <Livre></Livre>}
            {page === '' && <K7audio></K7audio>}
            {page === '' && <K7video></K7video>} */}
            </div>
            <Footer />
        </div>
    )
}

export default App
