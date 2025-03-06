import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscar, deletar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import Categoria from '../../../models/Categoria';

function DeletarCategoria() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function buscarPorId(id: string) {
		try {
			await buscar(`/categorias/${id}`, setCategoria);
		} catch (error: any) {
			console.error('Erro ao buscar categoria:', error);
			alert('Você não tem permissão para acessar esta categoria.');
		}
	}

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	async function deletarCategoria() {
		setIsLoading(true);

		try {
			await deletar(`/categorias/${id}`);
			alert('Categoria apagada com sucesso!');
		} catch (error: any) {
			console.error('Erro ao deletar categoria:', error);
			alert('Erro ao deletar categoria.');
		}

		setIsLoading(false);
		retornar();
	}

	function retornar() {
		navigate('/categorias');
	}

	return (
		<div className="container w-full mx-auto">
			<h1 className="py-4 text-3xl text-center">Deletar Categoria</h1>
			<p className="mb-4 font-semibold text-center">
				Você tem certeza de que deseja apagar a categoria a seguir?
			</p>
			<div className="flex flex-col justify-between overflow-hidden">
				<p className="h-full p-8 text-3xl text-center bg-white">{categoria.nome}</p>
				<div className="flex justify-center gap-5">
					<button
						className="w-30 rounded-xl py-2 bg-[#FD6101] text-white hover:bg-[#B63700] duration-500"
						onClick={retornar}>
						Não
					</button>
					<button
						className="w-30 rounded-xl border-2 text-[#FD6101] px-4 py-2 hover:bg-[#FD6101] hover:text-white hover:border-[#FD6101] duration-500"
						onClick={deletarCategoria}>
						{isLoading ? (
							<RotatingLines
								strokeColor="white"
								strokeWidth="5"
								animationDuration="0.75"
								width="24"
								visible={true}
							/>
						) : (
							<span>Sim</span>
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

export default DeletarCategoria;
