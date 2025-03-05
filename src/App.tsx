import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ListaExercicios from './components/exercicios/listaexercicios/ListaExercicios';

function App() {
	return (
		<>
			<ToastContainer />
			<ListaExercicios />
		</>
	);
}

export default App;
