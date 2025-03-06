import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ListaAluno from './components/aluno/listaaluno/ListaAluno';

function App() {
	return (
		<>
			<ToastContainer />
			<ListaAluno />
		</>
	);
}

export default App;
