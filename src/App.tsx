import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginCadastroForm from './pages/logincadastro/LoginCadastroForm';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Sobre from './pages/sobre/Sobre';
import Equipe from './pages/equipe/Equipe';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';
import ListaExercicios from './components/exercicios/listaexercicios/ListaExercicios';
import FormExercicio from './components/exercicios/formexercicio/FormExercicio';
import DeletarExercicio from './components/exercicios/deletarexercicio/DeletarExercicio';

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
                            <Route path='/sobre' element={<Sobre />} />
                            <Route path='/equipe' element={<Equipe />} />
                            <Route path='/categorias' element={<ListaCategorias />} />
                            <Route path='/categorias/store' element={<FormCategoria />} />
                            <Route path='/categorias/edit/:id' element={<FormCategoria />} />
                            <Route path='/categoria/detroy/:id' element={<DeletarCategoria />} />
                            <Route path='/exercicios' element={<ListaExercicios />} />
                            <Route path='/exercicios/store' element={<FormExercicio />} />
                            <Route path='/exercicios/edit/:id' element={<FormExercicio />} />
                            <Route path='/exercicios/detroy/:id' element={<DeletarExercicio />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
