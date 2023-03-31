import { useState } from 'react';
import './App.css';
import BackGround from './components/backGround';
import K7audio from './components/K7audio';
import K7video from './components/K7video';
import Livre from './components/Livre';
import Login from './components/login';
import RedPhone from './components/redphone';
import VinylClick from './components/vinyle';
import VinylesList from './components/vinyle-list';

function App() {
    const [page, setPage] = useState<string>('Accueil');

    return (
        <>
            <BackGround></BackGround>
            {page === 'Login' && <Login setPage={setPage}></Login>}
            {page !== 'listVinyl' && <VinylClick setPage={setPage}></VinylClick>}
            {page === 'listVinyl' && <VinylesList></VinylesList>}
            {page === 'Accueil' && <Livre></Livre>}
            {page === 'Accueil' && <K7audio></K7audio>}
            {page === 'Accueil' && <K7video></K7video>}
            <RedPhone setPage={setPage}></RedPhone>
        </>
    );
}

export default App;
