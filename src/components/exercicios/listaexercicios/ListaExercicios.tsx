import { MagnifyingGlass } from '@phosphor-icons/react';
import CardExercicios from '../cardexercicios/CardExercicios';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Exercicio from '../../../models/Exercicio';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToasstAlerta';
import { DNA } from 'react-loader-spinner';

function ListaExercicios() {
	const navigate = useNavigate();

	const [exercicios, setExercicios] = useState<Exercicio[]>([]);

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
		}
	}, [token]);

	useEffect(() => {
		buscarExercicios();
	}, [exercicios.length]);

	return (
		<>
			<div className="flex justify-center items-center bg-[#1E2729] flex-col md:h-80">
				<div className="container flex flex-col justify-center items-center md:items-start md:absolute z-0 p-6 text-white">
					<div className="flex flex-col justify-center items-center text-center">
						<h2 className="text-[2rem] lg:text-[4rem] xl:text-[6rem] font-bold">Lista de exercícios</h2>
						<p className="text-lg lg:text-[2rem]">Comece agora a mudar de vida!</p>
						<div className="w-full">
							<button className="min-w-200px mt-4 border-2 border-[#FD6101] px-8 py-2 text-white">
                                <Link to="/exercicios/store">
                                    + Exercicio
                                </Link>
							</button>
						</div>
					</div>
				</div>

				<div className="container flex justify-center md:justify-end h-full">
					<img
						src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/woman-good-mood-raises-arm-with-muscles-has-strong-body-dressed-gym-outfit-listens-audio-via-modern-headphones-poses-indoor-removebg-preview%201.svg?updatedAt=1741198688950"
						alt="Mulher Fitness"
						className="lg:h-full object-cover"
					/>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center h-20 text-lg mx-5 md:mx-0">
				<div className="container flex flex-col md:flex-row justify-between gap-5 mt-15 md:mt-0">
					<div className="flex flex-col gap-2 md:w-[20vw]">
						<select
							name="categoria"
							id="categoria"
							className="bg-[#D9D9D9] p-2  rounded-lg border-0 focus:ring-0 focus:outline-none text-[#808080]">
							<option value="" selected disabled>
								Categorias
							</option>
						</select>
					</div>

					<div className="flex flex-col gap-2 md:w-[80vw] ">
						<form className="flex justify-center items-center mx-auto w-full gap-4 ">
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
					{exercicios.length === 0 && (
						<span className="text-3xl text-center my-8">Nenhum exercício foi encontrado</span>
					)}
					<div
						className="container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{exercicios.map((exercicio) => (
							<CardExercicios key={exercicio.id} exercicio={exercicio} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default ListaExercicios;
