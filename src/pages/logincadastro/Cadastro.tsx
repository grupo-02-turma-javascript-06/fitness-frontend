import React from 'react';

const Cadastro: React.FC = () => {
	return (
		<form className="w-full">
			<h1 className="text-3xl font-semibold mb-[-10px] text-gray-700">Registration</h1>
			<div className="relative my-8">
				<input
					type="text"
					placeholder="Username"
					required
					className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
				/>
				<i className="bx bxs-user absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-700"></i>
			</div>
			<div className="relative my-8">
				<input
					type="email"
					placeholder="Email"
					required
					className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
				/>
				<i className="bx bxs-envelope absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-700"></i>
			</div>
			<div className="relative my-8">
				<input
					type="password"
					placeholder="Password"
					required
					className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
				/>
				<i className="bx bxs-lock-alt absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-700"></i>
			</div>
			<button
				type="submit"
				className="w-full h-12 bg-blue-500 rounded-2xl shadow-md text-white font-semibold text-base">
				Register
			</button>
			<p className="text-sm text-gray-700 mt-4 mb-4">or register with social platforms</p>
			<div className="flex justify-center">
				<a
					href="#"
					className="inline-flex p-2 border-2 border-gray-300 rounded-2xl text-2xl text-gray-700 mx-2">
					<i className="bx bxl-google"></i>
				</a>
				<a
					href="#"
					className="inline-flex p-2 border-2 border-gray-300 rounded-2xl text-2xl text-gray-700 mx-2">
					<i className="bx bxl-facebook"></i>
				</a>
				<a
					href="#"
					className="inline-flex p-2 border-2 border-gray-300 rounded-2xl text-2xl text-gray-700 mx-2">
					<i className="bx bxl-github"></i>
				</a>
				<a
					href="#"
					className="inline-flex p-2 border-2 border-gray-300 rounded-2xl text-2xl text-gray-700 mx-2">
					<i className="bx bxl-linkedin"></i>
				</a>
			</div>
		</form>
	);
};

export default Cadastro;
