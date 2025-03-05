import React, { useState } from 'react';
import './LoginCadastroForm.css'; // Importe o CSS
import Login from './Login';
import Cadastro from './Cadastro';

const LoginCadastroForm: React.FC = () => {
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    const handleToggle = () => {
        setIsRegisterMode(!isRegisterMode);
    };

    return (
        <div className={`container ${isRegisterMode ? 'active' : ''}`}>
            {/* Formulário de Login */}
            <div className={`form-box ${isRegisterMode ? '' : 'login'}`}>
                <Login />
            </div>

            {/* Formulário de Registro */}
            <div className={`form-box register ${isRegisterMode ? 'register' : ''}`}>
                <Cadastro />
            </div>

            {/* Painel de Alternância */}
            <div className="toggle-box">
                <div className="toggle-panel toggle-left">
                    <h1 className="text-3xl font-semibold">Hello, Welcome!</h1>
                    <p className="mb-5 text-sm">Don't have an account?</p>
                    <button onClick={handleToggle} className="btn register-btn">
                        Register
                    </button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1 className="text-3xl font-semibold">Welcome Back!</h1>
                    <p className="mb-5 text-sm">Already have an account?</p>
                    <button onClick={handleToggle} className="btn login-btn">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginCadastroForm;
