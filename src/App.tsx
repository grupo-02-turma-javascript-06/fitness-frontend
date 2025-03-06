import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginCadastroForm from './pages/logincadastro/LoginCadastroForm';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <AuthProvider>
                <ToastContainer />
                <BrowserRouter>
                    <div className="min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<LoginCadastroForm />} />
                            <Route path="/login" element={<LoginCadastroForm />} />
                            <Route path="/cadastro" element={<LoginCadastroForm />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
