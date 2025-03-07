import { GithubLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function Footer() {
	let data = new Date().getFullYear();

	return (
		<footer className="bg-[#1E2729] text-[#FFFFFF] py-8 border-t-2 border-[#FD6101]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-8 text-center sm:text-center md:text-left">
					<div className="flex justify-center md:justify-start">
						<img
							src="https://ik.imagekit.io/yijg14v4w/fitness-frontend/move2fit.svg?updatedAt=1741197074197"
							alt="Move2Fit"
							className="h-25"
						/>
					</div>

					<div className="flex flex-col sm:items-center md:items-start">
						<h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/equipe" className="hover:text-[#FD6101]">
									Equipe
								</Link>
							</li>
							<li>
								<Link to="/sobre" className="hover:text-[#FD6101]">
									Sobre nós
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col sm:items-center md:items-start">
						<h3 className="text-white text-lg font-semibold mb-4">Veja agora</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/exercicios" className="hover:text-[#FD6101]">
									Exercícios
								</Link>
							</li>
							<li>
								<Link to="/categorias" className="hover:text-[#FD6101]">
									Categorias
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col sm:items-center md:items-start">
						<h3 className="text-white text-lg font-semibold mb-4">Contate-nos</h3>
						<a
							href="https://github.com/grupo-02-turma-javascript-06/fitness-frontend"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-[#FD6101] flex items-center gap-2">
							<GithubLogo size={32} weight="regular" />
							GitHub
						</a>
					</div>
				</div>

				<div className="text-center text-base text-[#F0F0F0] mt-8">
					<p className="text-l">Move2Fit | Copyright: {data}</p>
				</div>
			</div>
		</footer>
	);
}
