import { useState } from 'react';
import './App.css';
import BackGround from './components/backGround';
import K7audio from './components/K7audio';
import K7video from './components/K7video';
import Livre from './components/Livre';
import Login from './components/login';
import Neon from './components/neon';
import Register from './components/register';
import VinylClick from './components/vinyles/vinyle';
import VinylesList from './components/vinyles/vinyle-list';

function App() {

    const [page, setPage] = useState<string>('Accueil');



    return (
        <div className='container h-100 text-center'>
            {/* <BackGround></BackGround> */}
            {page === 'Login' && <Login setPage={setPage}></Login>}
            {page === 'Register' && <Register setPage={setPage}></Register>}
            {/* {page !== 'listVinyl' && <VinylClick setPage={setPage}></VinylClick>}
            {page === 'listVinyl' && <VinylesList></VinylesList>}
            {page === '' && <Livre></Livre>}
            {page === '' && <K7audio></K7audio>}
            {page === '' && <K7video></K7video>} */}
            <Neon setPage={setPage}></Neon>
        </div>
    );
}

export default App;
