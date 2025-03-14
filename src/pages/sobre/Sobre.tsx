function Sobre() {
	return (
		<div className="relative min-h-screen bg-black">
			<div
				className="absolute inset-0 z-10"
				style={{
					backgroundImage: 'url(/images/Rectangle-shadow.svg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					mixBlendMode: 'multiply',
				}}
			/>

			<div
				className="absolute inset-0"
				style={{
					backgroundImage: 'url(/images/man-exercise.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					opacity: '0.8',
				}}
			/>

			<div className="relative z-20 container mx-auto px-6 md:px-12 pt-45 py-85">
				<div className="max-w-2xl">
					<h2 className="text-[#FD6101] text-2xl mb-4 block">Sobre nós |</h2>

					<h1 className="text-white text-5xl font-bold mb-6">Move2Fit</h1>

					<p className="text-gray-300 text-lg leading-relaxed mb-8">
						Transforma a gestão de treinos, facilitando a vida de personal trainers e alunos. Treinadores
						podem criar treinos personalizados, acompanhar o progresso e se comunicar de forma prática.
						Alunos têm acompanhamento claro e motivador, com foco no desempenho e resultados rápidos. O
						aplicativo otimiza a rotina fitness, aumenta a motivação e reduz a desistência. Com o Move 2
						Fit, sua jornada fitness nunca foi tão simples, organizada e eficaz.
					</p>

					<button
						className="bg-[#FD6101] text-white px-8 py-3 rounded-md 
              hover:bg-[#ff7a33] transition-colors duration-300 font-medium cursor-pointer">
						<a href="https://github.com/grupo-02-turma-javascript-06/fitness-frontend">CONTATE-NOS</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Sobre;
