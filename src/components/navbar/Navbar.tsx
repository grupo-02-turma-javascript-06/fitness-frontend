import { UserCircle, List } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav className="bg-[#1E2729] top-0 left-0 w-full z-50 border-b-2 border-[#FD6101] h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center justify-between h-full flex-wrap">
                <div className="flex items-center">
                    <Link to='/home'>
                        <img
                            src="https://ik.imagekit.io/yijg14v4w/fitness-frontend/Logo.svg?updatedAt=1741178306395"
                            alt="Move2Fit"
                            className="h-10"
                        />
                    </Link>
                </div>

                {/* Menu desktop */}
                <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
                    <Link to="/home" className="text-white hover:text-orange-500 transition-colors">Home</Link>
                    <Link to="/sobre" className="text-white hover:text-orange-500 transition-colors">Sobre</Link>
                    <Link to="/exercicios" className="text-white hover:text-orange-500 transition-colors">Exercícios</Link>
                    <Link to="/categorias" className="text-white hover:text-orange-500 transition-colors">Categorias</Link>
                    <UserCircle size={40} className="text-gray-300 cursor-pointer hover:text-white flex-shrink-0" />
                </div>

                {/* Ícone do menu mobile */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <List size={32} />
                </button>
            </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
        <div className="md:hidden bg-[#1A1D1F] border-t border-gray-800 absolute w-full left-0 top-20">
            <div className="px-4 py-3 space-y-2">
                <Link to="/home" className="block px-3 py-2 text-white hover:text-orange-500">Home</Link>
                <Link to="/sobre" className="block px-3 py-2 text-white hover:text-orange-500">Sobre</Link>
                <Link to="/exercicios" className="block px-3 py-2 text-white hover:text-orange-500">Exercícios</Link>
                <Link to="/categorias" className="block px-3 py-2 text-white hover:text-orange-500">Categorias</Link>
            </div>
        </div>
        )}
    </nav>
);
}
