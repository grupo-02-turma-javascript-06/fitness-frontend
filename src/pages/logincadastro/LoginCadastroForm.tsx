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
			<div className={`form-box ${isRegisterMode ? '' : 'login'}`}>
				<Login />
			</div>

			<div className={`form-box register ${isRegisterMode ? 'register' : ''}`}>
				<Cadastro />
			</div>

			<div className="toggle-box">
				<div className="toggle-panel toggle-left">
					<h1 className="text-3xl font-semibold">Bem Vinde de volta!</h1>
					<p className="mb-5 text-sm">Não tem uma conta?</p>
					<button onClick={handleToggle} className="btn register-btn">
						Cadastre-se
					</button>
				</div>
				<div className="toggle-panel toggle-right">
					<h1 className="text-3xl font-semibold">Olá, Seja Bem Vinde!</h1>
					<p className="mb-5 text-sm">Já tem uma conta?</p>
					<button onClick={handleToggle} className="btn login-btn">
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginCadastroForm;
