import { useState } from 'react';
import Modal from '../../modal/Modal';

function DeletarExercicio() {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	function retornar() {
		setIsOpen(false);
	}

	return (
		<>
			<Modal isOpen={isOpen} onClose={retornar}>
				<div className="container w-full mx-auto">
					<h1 className="py-4 text-3xl text-center">Deletar Exercício</h1>
					<p className="mb-4 font-semibold text-center">
						Você tem certeza de que deseja apagar esse Exercício?
					</p>
					<div className="flex flex-col justify-between overflow-hidden">
						<p className="h-full p-8 text-3xl text-center bg-white">Nome do Exercício</p>
						<div className="flex justify-center gap-5">
							<button
								className="w-30 rounded-lg py-2 bg-[#FD6101] text-white hover:bg-[#B63700] duration-500 "
								// onClick={retornar}
							>
								Não
							</button>
							<button
								className="w-30 rounded-lg border-2 text-[#FD6101] px-4 py-2 hover:bg-[#FD6101] hover:text-white hover:border-[#FD6101] duration-500"
								onClick={DeletarExercicio}>
								{/* {isLoading ? (
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    />
                                ) : (
                                    <span>Sim</span>
                                )} */}
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}

export default DeletarExercicio;
