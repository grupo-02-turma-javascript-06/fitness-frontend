import { PencilSimpleLine, Plus, Trash } from '@phosphor-icons/react';

function CardExercicios() {
	return (
		<>
			<div className="drop-shadow-lg flex flex-col rounded-2xl overflow-hidden justify-between bg-white text-[#1E2729]">
				<div>
					<div className="flex w-full  items-center gap-4">
						<img
							src="https://ik.imagekit.io/q5tv5x3k8/default-image.jpg?updatedAt=1737306155751"
							alt="Imagem relacionada ao exercício"
						/>
					</div>
					<div className="flex flex-col py-6 gap-6 px-8">
						<div className="flex flex-col gap-6">
							<h2 className="text-xl font-semibold">Agachamento</h2>
							<div className="flex justify-between gap-6">
								<div className="flex gap-3">
									<img
										src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/exercise%20(2)%201.svg?updatedAt=1741195777018"
										alt=""
									/>
									<p>20kg</p>
								</div>
								<div className="flex gap-3">
									<img
										src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/repeat%201.svg?updatedAt=1741195776962"
										alt=""
									/>
									<p>25</p>
								</div>
								<div className="flex gap-3">
									<img
										src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/time-left%201.svg?updatedAt=1741195777094"
										alt=""
									/>
									<p>35min</p>
								</div>
							</div>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							<div className="flex gap-4">
								<img
									src="https://ik.imagekit.io/q5tv5x3k8/Move2Fit/time-left%201.svg?updatedAt=1741195777094"
									alt=""
								/>
								<p>Cardio</p>
							</div>
						</div>
						<div className="flex justify-end gap-6 text-[#1E2729]">
							<PencilSimpleLine
								size={25}
								className="transition-transform duration-300 hover:scale-120 hover:text-[#B63700]"
							/>
							<Trash
								size={25}
								className="transition-transform duration-300 hover:scale-120 hover:text-[#B63700]"
							/>
							<Plus
								size={25}
								className="transition-transform duration-300 hover:scale-120 hover:text-[#B63700]"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardExercicios;
