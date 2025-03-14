import { MagnifyingGlass } from '@phosphor-icons/react';
import CardExercicios from '../cardexercicios/CardExercicios';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Exercicio from '../../../models/Exercicio';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import { DNA } from 'react-loader-spinner';

function ListaExercicios() {
	const navigate = useNavigate();

	const [exercicios, setExercicios] = useState<Exercicio[]>([]);
	const [query, setQuery] = useState(''); // Adicionando estado para pesquisa

	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;

	async function buscarExercicios() {
		try {
			await buscar('/exercicios', setExercicios, {
				headers: {
					Authorization: token,
				},
			});
		} catch (error: any) {
			if (error.toString().includes('403')) {
				handleLogout();
			}
		}
	}

	useEffect(() => {
		if (token === '') {
			ToastAlerta('Você precisa estar logado!', 'erro');
			navigate('/');
		} else {
			buscarExercicios();
		}
	}, [token]);

	// Filtrando os exercícios com base no nome e no valor da pesquisa
	const filterExercicios = exercicios.filter((exercicio) =>
		exercicio.nome.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<>
			<div className="bg-[#1E2729]">
				<Link to="/exercicios/store">
					<img src="/images/banner-exercicios.svg" alt="Banner de cadastro de exercício" className="w-full" />
				</Link>
			</div>

			<div className="flex flex-col justify-center items-center h-20 text-lg mx-5 md:mx-0">
				<div className="container flex flex-col md:flex-row justify-between gap-5 mt-15 md:mt-0">
					{/* <div className="flex flex-col gap-2 md:w-[20vw]">
						<select
							name="categoria"
							id="categoria"
							className="bg-[#D9D9D9] p-2 rounded-lg border-0 focus:ring-0 focus:outline-none text-[#808080]">
							<option value="" selected disabled>
								Categorias
							</option>
							{exercicios.map((exercicio) => (
								<>
									<option key={exercicio.id} value={exercicio.id}>
										{exercicio.nome}
									</option>
								</>
							))}
						</select>
					</div> */}

					<div className="flex flex-col gap-2 md:w-[80vw]">
						<form className="flex justify-center items-center mx-auto w-full gap-4">
							<label htmlFor="search" className="sr-only">
								Search
							</label>
							<div className="flex gap-4 items-center bg-white w-full rounded-lg drop-shadow-lg">
								<div className="flex justify-center items-center bg-[#dbdada] w-15 h-11 rounded-l-lg">
									<MagnifyingGlass size={25} className="text-white" />
								</div>

								<input
									type="text"
									id="simple-search"
									className="w-full border-0 focus:ring-0 focus:outline-none py-2 px-4"
									placeholder="Pesquisar Exercício"
									value={query} // Vinculando o estado `query` ao valor do input
									onChange={(e) => setQuery(e.target.value)} // Atualizando o estado conforme o usuário digita
								/>
							</div>
						</form>
					</div>
				</div>
			</div>

			{exercicios.length === 0 && (
				<DNA
					visible={true}
					height="200"
					width="200"
					ariaLabel="dna-loading"
					wrapperStyle={{}}
					wrapperClass="dna-wrapper mx-auto"
				/>
			)}

			<div className="flex justify-center w-full my-4 mt-15 md:mt-0">
				<div className="container flex flex-col mx-2">
					{filterExercicios.length === 0 && (
						<span className="text-3xl text-center my-8">Nenhum exercício foi encontrado</span>
					)}
					<div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filterExercicios.map((exercicio) => (
							<CardExercicios key={exercicio.id} exercicio={exercicio} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default ListaExercicios;
