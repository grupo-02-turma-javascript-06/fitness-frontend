import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginCadastroForm from './pages/logincadastro/LoginCadastroForm';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <AuthProvider>
                <ToastContainer />
                <BrowserRouter>
                    <Navbar />
                    <div className="min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<LoginCadastroForm />} />
                            <Route path="/login" element={<LoginCadastroForm />} />
                            <Route path="/cadastro" element={<LoginCadastroForm />} />
                            <Route path='/home' element={<Home />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
