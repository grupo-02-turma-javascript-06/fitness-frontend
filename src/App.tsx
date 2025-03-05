import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import LoginCadastroForm from './pages/logincadastro/LoginCadastroForm';

function App() {
	return (
		<>
			<ToastContainer />
			<LoginCadastroForm />
		</>
	);
}

export default App;
