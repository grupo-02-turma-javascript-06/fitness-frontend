import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastAlerta } from '../../utils/ToastAlerta';
import { buscar } from '../../services/Service';
import Aluno from '../../models/Aluno';
import Exercicio from '../../models/Exercicio';

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

	const exerciciosDoAluno = aluno.exercicios || (aluno as any).exercicio || [];

	return (
		<div className="@container container mx-auto m-2 rounded-2xl overflow-hidden mt-15 max-sm:px-1">
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{exerciciosDoAluno && exerciciosDoAluno.length > 0 ? (
						exerciciosDoAluno.map((exercicio: Exercicio) => (
							<div key={exercicio.id} className="bg-white rounded-lg shadow-md overflow-hidden">
								<img src={exercicio.foto} alt={exercicio.nome} className="w-full h-48 object-cover" />
								<div className="p-4">
									<h3 className="font-bold text-lg text-gray-800">{exercicio.nome}</h3>
									<p className="text-gray-600 mt-1">{exercicio.descricao}</p>
									<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
										{exercicio.carga > 0 && (
											<p className="text-gray-700">
												<span className="font-medium">Carga:</span> {exercicio.carga} kg
											</p>
										)}
										{exercicio.repeticao > 0 && (
											<p className="text-gray-700">
												<span className="font-medium">Repetições:</span> {exercicio.repeticao}
											</p>
										)}
										{exercicio.tempo && (
											<p className="text-gray-700">
												<span className="font-medium">Tempo:</span> {exercicio.tempo}
											</p>
										)}
										{exercicio.categoria && (
											<p className="text-gray-700 col-span-2">
												<span className="font-medium">Categoria:</span>{' '}
												{exercicio.categoria.nome}
											</p>
										)}
									</div>
								</div>
							</div>
						))
					) : (
						<div className="col-span-full text-center py-8">
							<p className="text-gray-500">Nenhum exercício atribuído a este aluno.</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default PerfilAluno;
