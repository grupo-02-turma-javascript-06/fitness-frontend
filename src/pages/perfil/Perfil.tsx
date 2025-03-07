
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastAlerta } from '../../utils/ToastAlerta';

function Perfil() {
	const navigate = useNavigate();

	const { usuario } = useContext(AuthContext);

	useEffect(() => {
		if (usuario.token === '') {
			ToastAlerta('Você precisa estar logado', 'erro');
			navigate('/login');
		}
	}, [usuario.token]);

	return (
		<div className="@container	container mx-auto m-2 rounded-2xl overflow-hidden mt-15 max-sm:px-1">
			<div>
				<img
					className="w-full h-80 object-cover max-sm:h-40 max-lg:h-50"
					src="/images/image-orange.jpg"
					alt="Capa do Perfil"
				/>

				<img
					className="rounded-full border-12 border-[#F0F0F0] w-100 mx-21 mt-[-10rem] top-[-30px] relative z-10 max-sm:w-50 max-sm:top-[60px] max-sm:mx-auto max-sm:border-10 max-lg:w-65 max-lg:top-[50px] max-lg:mx-15"
					src={usuario.foto}
					alt={`Foto de perfil de ${usuario.nome}`}
				/>

				<div
					className="relative mt-[-13rem] h-90 flex flex-col 
    bg-[#1E2729] text-white text-2xl rounded-bl-lg rounded-br-lg items-center justify-center max-sm:mt-[-1rem] max-lg:mt-[-4rem]">
					<div className="absolute ml-20 top-10 max-sm:ml-0 max-sm:top-22 max-sm:flex-col max-sm:items-center max-sm:text-center max-lg:top-12 max-lg:ml-50">
						<div className="">
							<h2 className="font-bold text-3xl pb-2">{usuario.nome}</h2>
							<h2>{usuario.usuario}</h2>
						</div>
						<div className="mt-10 max-sm:mt-7 ">
							<p className="pb-1">Peso: {usuario.peso}</p>
							<p className="pb-1">Altura: {usuario.altura}</p>
							<p className="pb-1">IMC: {usuario.imc}</p>
							<p className="pb-1">Classificação: {usuario.classificacao}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Perfil;

