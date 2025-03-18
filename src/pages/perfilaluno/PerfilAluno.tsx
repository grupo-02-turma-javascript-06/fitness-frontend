import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastAlerta } from '../../utils/ToastAlerta';
import Aluno from '../../models/Aluno';
import { buscar } from '../../services/Service';

function PerfilAluno() {
	const navigate = useNavigate();

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	const { id } = useParams<{ id: string }>();
	const [aluno, setAluno] = useState<Aluno>({} as Aluno);

	async function buscarPorId(id: string) {
		try {
			await buscar(`/alunos/${id}`, setAluno, {
				headers: { Authorization: token },
			});
		} catch (error: any) {
			if (error.toString().includes('403')) {
				handleLogout();
			}
		}
	}

	useEffect(() => {
		if (token === '') {
			ToastAlerta('Você precisa estar logado', 'erro');
			navigate('/login');
		}
	}, [token]);

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

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
					src={aluno.foto}
					alt={`Foto de perfil de ${aluno.nome}`}
				/>

				<div className="relative mt-[-13rem] h-50 flex flex-col bg-[#1E2729] text-white text-2xl rounded-bl-lg rounded-br-lg items-center justify-center max-sm:mt-[-1rem] max-lg:mt-[-4rem]">
					<div className="absolute ml-20 top-10 max-sm:ml-0 max-sm:top-22 max-sm:flex-col max-sm:items-center max-sm:text-center max-lg:top-12 max-lg:ml-50">
						<div className="">
							<h2 className="font-bold text-3xl pb-2">{aluno.nome}</h2>
							<h2>{aluno.email}</h2>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white rounded-lg shadow-2xl w-full mx-auto mt-4">
					<div className="flex flex-col sm:flex-row sm:justify-around justify-center items-center mb-2 text-center sm:text-start">
						<div>
							<p className="text-gray-700 font-medium">
								Peso: <span className="font-semibold">{aluno.peso}</span> kg
							</p>
							<p className="text-gray-700 font-medium">
								Altura: <span className="font-semibold">{aluno.altura}</span>m
							</p>
						</div>
						<div>
							<p className="text-gray-700 font-medium">
								IMC: <span className="font-semibold">{aluno.imc}</span>
							</p>
							<p className="text-gray-700 font-medium">
								Classificação: <span className="font-semibold">{aluno.classificacao}</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div>
					<h1>Lista de treino</h1>
				</div>
				<div>map do treino</div>
			</div>
		</div>
	);
}

export default PerfilAluno;
