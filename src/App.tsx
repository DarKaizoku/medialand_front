import './App.css';
import BackGround from './components/BackGround';
import K7audio from './components/K7audio';
import K7video from './components/K7video';
import Livre from './components/Livre';
import RedPhone from './components/redphone';

function App() {
	return (
		<div
			id='main'
			className='container'
		>
			<Livre></Livre>
			<K7audio></K7audio>
			<K7video></K7video>
			<RedPhone></RedPhone>
		</div>
	);
}

export default App;
