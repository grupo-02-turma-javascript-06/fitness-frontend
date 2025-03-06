import { PencilSimpleLine, Plus, Trash } from '@phosphor-icons/react';
import Exercicio from '../../../models/Exercicio';
import { Link } from 'react-router-dom';

interface CardExerciciosProps {
	exercicio: Exercicio;
}

function CardExercicios({ exercicio }: CardExerciciosProps) {
	return (
		<>
			<div className="drop-shadow-lg flex flex-col rounded-2xl overflow-hidden justify-between bg-white text-[#1E2729]">
				<div>
					<div className="flex w-full  items-center gap-4">
						<img src={exercicio.foto} alt={exercicio.nome} />
					</div>
					<div className="flex flex-col py-6 gap-6 px-8">
						<div className="flex flex-col gap-6">
							<h2 className="text-xl font-semibold">{exercicio.nome}</h2>
							<div className="flex justify-between gap-6">
								<div className="flex gap-3">
									<img
										src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/exercise%20(2)%201.svg?updatedAt=1741195777018"
										alt=""
									/>
									<p>{exercicio.carga}</p>
								</div>
								<div className="flex gap-3">
									<img
										src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/repeat%201.svg?updatedAt=1741195776962"
										alt=""
									/>
									<p>{exercicio.repeticao}</p>
								</div>
								<div className="flex gap-3">
									<img
										src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/time-left%201.svg?updatedAt=1741195777094"
										alt=""
									/>
									<p>{exercicio.tempo}</p>
								</div>
							</div>
							<p>{exercicio.descricao}</p>
							<div className="flex gap-4">
								<img src={exercicio.categoria?.icone} alt={exercicio.categoria?.nome} />
								<p>{exercicio.categoria?.nome}</p>
							</div>
						</div>
						<div className="flex justify-end gap-6 text-[#1E2729]">
							<Link to={`/exercicios/edit/${exercicio.id}`}>
								<PencilSimpleLine
									size={25}
									className="transition-transform duration-300 hover:scale-120 hover:text-[#B63700]"
								/>
							</Link>
							<Link to={`/exercicios/detroy/${exercicio.id}`}>
								<Trash
									size={25}
									className="transition-transform duration-300 hover:scale-120 hover:text-[#B63700]"
								/>
							</Link>
							<Link to="">
								<Plus
									size={25}
									className="transition-transform duration-300 hover:scale-120 hover:text-[#B63700]"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardExercicios;
