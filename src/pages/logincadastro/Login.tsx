import React from 'react';

const Login: React.FC = () => {
    return (
        <form className="w-full max-w-md mx-auto">
            <h1 className="text-3xl font-semibold mb-6 text-gray-300">Login</h1>
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
                />
                <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-700"></i>
            </div>
            <div className="relative mb-6">
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-2xl text-gray-700 font-medium text-base outline-none placeholder-gray-500"
                />
                <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-700"></i>
            </div>
            <div className="text-sm text-gray-700 mb-6">
                <a href="#">Forgot Password?</a>
            </div>
            <button
                type="submit"
                className="w-full h-12 bg-blue-500 rounded-2xl shadow-md text-white font-semibold text-base">
                Login
            </button>
            <p className="text-sm text-gray-700 mt-6 mb-6">or login with social platforms</p>
            <div className="flex justify-center space-x-4">
                <a
                    href="#"
                    className="inline-flex p-2 border-2 border-gray-300 rounded-2xl text-2xl text-gray-700">
                    <i className="bx bxl-google"></i>
                </a>
                <a
                    href="#"
                    className="inline-flex p-2 border-2 border-gray-300 rounded-2xl text-2xl text-gray-700">
                    <i className="bx bxl-facebook"></i>
                </a>
                <a
                    href="#"
                    className="inline-flex p-2 border-2 border-gray-300 rounded-2xl text-2xl text-gray-700">
                    <i className="bx bxl-github"></i>
                </a>
                <a
                    href="#"
                    className="inline-flex p-2 border-2 border-gray-300 rounded-2xl text-2xl text-gray-700">
                    <i className="bx bxl-linkedin"></i>
                </a>
            </div>
        </form>
    );
};

export default Login;
