const equipe = [
	{
		nome: 'Cauã Rocha Pereira',
		cargo: 'Desenvolvedor',
		imagem: 'https://avatars.githubusercontent.com/u/90944112?v=4',
		linkedin: 'https://www.linkedin.com/in/c-rocha7/',
		github: 'https://github.com/c-rocha7',
	},
	{
		nome: 'Diego Rodrigues do Nascimento',
		cargo: 'Desenvolvedor',
		imagem: 'https://avatars.githubusercontent.com/u/91500024?v=4',
		linkedin: 'https://www.linkedin.com/in/diego-rodrigues-do-nascimento-b6a7641a3/',
		github: 'https://github.com/diego1999dd',
	},
	{
		nome: 'Eliseu Francisco de souza',
		cargo: 'Scrum Master',
		imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQF70utVDgdVjQ/profile-displayphoto-shrink_200_200/B4DZN4j456HUAY-/0/1732894494914?e=1746057600&v=beta&t=4X-_CLKOzFC61OtjSuBScgqKvLziexyHgmjQ567bPms',
		linkedin: 'https://www.linkedin.com/in/eliseu-souza/',
		github: 'https://github.com/EliseuZeu',
	},
	{
		nome: 'Ianka Lopes',
		cargo: 'Desenvolvedora',
		imagem: 'https://avatars.githubusercontent.com/u/177789659?v=4',
		linkedin: 'https://www.linkedin.com/in/iankalps',
		github: 'https://github.com/IankaLps',
	},
	{
		nome: 'Jessica Rosário',
		cargo: 'Desenvolvedora',
		imagem: 'https://avatars.githubusercontent.com/u/171865716?v=4',
		linkedin: 'https://www.linkedin.com/in/jessica-rosario-/',
		github: 'https://github.com/Madsik92',
	},
	{
		nome: 'Jonas Gomes',
		cargo: 'Desenvolvedor',
		imagem: 'https://avatars.githubusercontent.com/u/154485867?v=4',
		linkedin: 'https://www.linkedin.com/in/jonas-neto/',
		github: 'https://github.com/JunoPrice',
	},
	{
		nome: 'Josiane Fermao',
		cargo: 'Desenvolvedora',
		imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQEIOVeAt6ZiJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732912950413?e=1746057600&v=beta&t=PRV629UUglQzbrVU6rSceHBQG7uOCgk7lTqzRMqj64U',
		linkedin: 'https://www.linkedin.com/in/josiane-fermao/',
		github: 'https://github.com/josifermaodev',
	},
];

function Equipe() {
	return (
		<>
			<div className="flex justify-center items-center w-full flex-col px-4 pt-10">
				<div className="container text-4xl text-center mb-10">
					<h1 className="mt-10">
						Equipe de desenvolvimento da
						<span className="pl-2 text-[#FD6101]">Move2Fit</span>
					</h1>
				</div>

				<div className="container mx-auto justify-center items-center max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[auto,auto,auto] gap-8 mb-10">
					{equipe.map((membro, index) => (
						<div
							key={index}
							className="rounded-bl-2xl rounded-br-2xl w-full h-80 mx-1 m-2 overflow-hidden mt-10">
							<img
								className="flex justify-center rounded-full w-50 h-50 border-8 border-[#F0F0F0] relative z-10"
								src={membro.imagem}
								alt={membro.nome}
							/>

							<div className="relative mt-[-6rem] h-80 flex flex-col bg-[#D9D9D9] justify-center rounded-tr-2xl">
								<div className="absolute top-1 right-[-70px] gap-6 flex w-50 mt-5">
									<a href={membro.linkedin} target="_blank" rel="noopener noreferrer">
										<img
											src="images/linkedin-1.svg"
											alt=""
											className="transition-transform duration-300 hover:-translate-y-3"
										/>
									</a>
									<a href={membro.github} target="_blank" rel="noopener noreferrer">
										<img
											src="images/github-1.svg"
											alt=""
											className="transition-transform duration-300 hover:-translate-y-3"
										/>
									</a>
								</div>
								<div className="ml-5 mb-5 gap-2 text-lg">
									<h2 className="font-semibold">{membro.nome}</h2>
									<p>{membro.cargo}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Equipe;
