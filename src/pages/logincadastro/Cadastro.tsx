import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginCadastroForm.css';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { FacebookLogo, GithubLogo, GoogleLogo, LinkedinLogo, Eye, EyeSlash } from '@phosphor-icons/react';
import { ToastAlerta } from '../../utils/ToasstAlerta';
import { RotatingLines } from 'react-loader-spinner';

const Cadastro: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [confirmaSenha, setConfirmaSenha] = useState<string>("");
    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        peso: 0,
        altura: 0,
        imc: 0,
    });

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar();
        }
    }, [usuario]);

    function retornar() {
        if (usuario.id !== 0) {
            navigate('/login', { replace: true });
            window.location.reload();
        } else {
            navigate('/login');
        }
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value);
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true);

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
                ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso');
            } catch (error) {
                ToastAlerta('Erro ao cadastrar o usuário!', 'erro');
            }
        } else {
            ToastAlerta('Dados estão inconsistentes. Verifique as informações do cadastro', 'erro');
            setUsuario({ ...usuario, senha: '' });
            setConfirmaSenha('');
        }

        setIsLoading(false);
    }

    return (
        <>
            <form className="w-full max-w-md mx-auto p-6" onSubmit={cadastrarNovoUsuario}>
                <h1 className="text-3xl font-semibold mb-6 text-gray-700">Cadastro</h1>
                <div className="relative mb-3">
                    <input
                        type="text"
                        name='nome'
                        placeholder="Username"
                        className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-700"></i>
                </div>
                <div className="relative mb-3">
                    <input
                        type="email"
                        name='usuario'
                        placeholder="Email"
                        className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <i className="bx bxs-envelope absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-700"></i>
                </div>
                <div className="relative mb-3">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    {showPassword ? (
                        <Eye
                            size={25}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    ) : (
                        <EyeSlash
                            size={25}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    )}
                    <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-700"></i>
                </div>
                <div className="relative mb-3">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirmarSenha"
                        name="confirmarSenha"
                        placeholder="Confirmar Senha"
                        className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
                        value={confirmaSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                    />
                    {showPassword ? (
                        <Eye
                            size={25}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    ) : (
                        <EyeSlash
                            size={25}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    )}
                    <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-700"></i>
                </div>
                <div className="relative mb-3">
                    <input
                        id='foto'
                        name='foto'
                        type="text"
                        placeholder="Foto"
                        className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <i className="bx bxs-image absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-700"></i>
                </div>
                <div className="flex w-auto justify-between items-center space-x-4">
                    <div className="w-full relative mb-3">
                        <input
                            id='peso'
                            name='peso'
                            type="number"
                            placeholder="Peso"
                            className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
                            value={usuario.peso}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        <i className="bx bxs-weight absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-700"></i>
                    </div>
                    <div className="w-full relative mb-3">
                        <input
                            id='altura'
                            name='altura'
                            type="number"
                            placeholder="Altura"
                            className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
                            value={usuario.altura}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        <i className="bx bxs-ruler absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-700"></i>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full h-12 bg-[#FD6101] rounded-2xl shadow-md text-white font-semibold text-base cursor-pointer flex items-center justify-center"
                    onClick={retornar}>
                    {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>Cadastrar</span>
                    }
                </button>
                <p className="text-sm text-gray-700 mt-1 mb-3">cadastre-se com redes sociais</p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#"
                        className="inline-flex p-2 ">
                        <GoogleLogo size={35} weight='bold' className='hover:text-[#FD6101]' />
                    </a>
                    <a
                        href="#"
                        className="inline-flex p-2 ">
                        <FacebookLogo size={35} weight='bold' className='hover:text-[#FD6101]' />
                    </a>
                    <a
                        href="#"
                        className="inline-flex p-2 ">
                        <GithubLogo size={35} weight='bold' className='hover:text-[#FD6101]' />
                    </a>
                    <a
                        href="#"
                        className="inline-flex p-2 ">
                        <LinkedinLogo size={35} weight='bold' className='hover:text-[#FD6101]' />
                    </a>
                </div>
            </form>
        </>
    );
};

export default Cadastro;
