import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Para navegação
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerta';

export default function Home() {
	const navigate = useNavigate();
	const { usuario } = useContext(AuthContext);

	useEffect(() => {
		if (!usuario.token) {
			navigate('/login');
			ToastAlerta('Você precisa estar logado!', 'info');
		}
	}, [usuario, navigate]);

	return (
		<div className="relative min-h-screen flex items-center">
			<div
				className="absolute top-0 left-0 w-full h-full"
				style={{
					backgroundImage: `url('/images/woman-two-men.jpg')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundColor: 'transparent',
					filter: 'blur(3px)',
				}}></div>

			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

			<div className="relative px-4 sm:px-6 lg:px-8 py-32 z-10 text-left w-full ml-40">
				<h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#FD6101]">Seja bem vinde!</h1>
				<p className="text-xl md:text-xl max-w-xl mb-8 text-white">
					Treinos organizados, resultados reais! Conectando alunos e personal trainers para uma jornada
					fitness mais eficaz.
				</p>
				<Link to="/perfil">
					<button className="bg-[#FD6101] hover:bg-[#b44d00] text-white w-[180px] h-[50px] rounded-[5px] text-[20px] font-medium cursor-pointer">
						PERFIL
					</button>
				</Link>
			</div>
		</div>
	);
}
