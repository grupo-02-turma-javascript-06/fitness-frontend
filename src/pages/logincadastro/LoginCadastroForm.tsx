import React, { useState } from 'react';
import Login from './Login';
import Cadastro from './Cadastro';

const LoginCadastroForm: React.FC = () => {
	const [isRegisterMode, setIsRegisterMode] = useState(false);

	const handleToggle = () => {
		setIsRegisterMode(!isRegisterMode);
	};

	return (
		<div className="relative w-[850px] h-[550px] bg-white rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden">
			{/* Formulário de Login */}
			<div
				className={`absolute w-1/2 h-full p-10 bg-white flex items-center text-center text-gray-700 z-10 transition-all duration-600 ease-in-out delay-1200 ${
					isRegisterMode ? 'right-1/2' : 'right-0'
				}`}>
				<Login />
			</div>

			{/* Formulário de Registro */}
			<div
				className={`absolute w-1/2 h-full p-10 bg-white flex items-center text-center text-gray-700 z-10 right-0 transition-opacity duration-600 ease-in-out ${
					isRegisterMode ? 'opacity-100' : 'opacity-0'
				}`}>
				<Cadastro />
			</div>

			{/* Painel de Alternância */}
			<div className="absolute w-full h-full">
				<div
					className="absolute w-[300%] h-full bg-blue-500 rounded-[150px] z-[2] transition-all duration-[1800ms] ease-in-out"
					style={{ left: isRegisterMode ? '50%' : '-250%' }}
				/>
				<div
					className={`absolute w-1/2 h-full flex flex-col justify-center items-center text-white z-[2] transition-all duration-600 ease-in-out ${
						isRegisterMode ? 'left-[-50%]' : 'left-0'
					}`}
					style={{ transitionDelay: isRegisterMode ? '0.6s' : '1.2s' }}>
					<h1 className="text-3xl font-semibold">Hello, Welcome!</h1>
					<p className="mb-5 text-sm">Don't have an account?</p>
					<button
						onClick={handleToggle}
						className="w-40 h-11 bg-transparent border-2 border-white rounded-2xl text-white font-semibold text-base">
						Register
					</button>
				</div>
				<div
					className={`absolute w-1/2 h-full flex flex-col justify-center items-center text-white z-[2] transition-all duration-600 ease-in-out ${
						isRegisterMode ? 'right-0' : 'right-[-50%]'
					}`}
					style={{ transitionDelay: isRegisterMode ? '1.2s' : '0.6s' }}>
					<h1 className="text-3xl font-semibold">Welcome Back!</h1>
					<p className="mb-5 text-sm">Already have an account?</p>
					<button
						onClick={handleToggle}
						className="w-40 h-11 bg-transparent border-2 border-white rounded-2xl text-white font-semibold text-base">
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginCadastroForm;
