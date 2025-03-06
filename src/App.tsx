import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import ListaExercicios from './components/exercicios/listaexercicios/ListaExercicios';
import FormExercicio from './components/exercicios/formexercicio/FormExercicio';

function App() {
	return (
		<>
			<ToastContainer />
			<FormExercicio />
		</>
	);
}

export default App;
