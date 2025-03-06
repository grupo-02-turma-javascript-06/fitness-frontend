function FormExercicio() {
	return (
		<>
			<div className="container flex flex-col mx-auto items-center my-8">
				<h1 className="text-4xl text-center my-8">Cadastrar/Editar Exercício</h1>
				<form className="flex flex-col w-1/2 gap-4 ">
					<div className="flex flex-col gap-2">
						<label htmlFor="nome" className="text-[#1E2729]">
							Nome
						</label>
						<input
							type="text"
							placeholder="Digite o nome do Exercício"
							name="nome"
							required
							className="rounded-lg p-2 bg-[#D9D9D9] text-[#808080] border-0 focus:ring-0 focus:outline-none"
							value=""
							// onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="descricao" className="text-[#1E2729]">
							Descrição
						</label>
						<input
							type="text"
							placeholder="Digite a descrição do Exercício"
							name="descricao"
							required
							className="rounded-lg p-2 bg-[#D9D9D9] text-[#808080] border-0 focus:ring-0 focus:outline-none"
							value=""
							// onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="foto" className="text-[#1E2729]">
							Foto
						</label>
						<input
							type="text"
							placeholder="insira o link da foto"
							name="foto"
							required
							className="rounded-lg p-2 bg-[#D9D9D9] text-[#808080] border-0 focus:ring-0 focus:outline-none"
							value=""
							// onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="carga" className="text-[#1E2729]">
							Carga
						</label>
						<input
							type="text"
							placeholder="Digite o peso necessário"
							name="carga"
							required
							className="rounded-lg p-2 bg-[#D9D9D9] text-[#808080] border-0 focus:ring-0 focus:outline-none"
							value=""
							// onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<div className="flex justify-between gap-4">
						<div className="flex flex-col gap-2 w-full">
							<label htmlFor="foto" className="text-[#1E2729]">
								Repetição
							</label>
							<input
								type="text"
								placeholder="insira repetições"
								name="foto"
								required
								className="rounded-lg p-2 bg-[#D9D9D9] text-[#808080] border-0 focus:ring-0 focus:outline-none"
								value=""
								// onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label htmlFor="tempo" className="text-[#1E2729]">
								Tempo
							</label>
							<input
								type="text"
								placeholder="insira o tempo"
								name="tempo"
								required
								className="rounded-lg p-2 bg-[#D9D9D9] text-[#808080] border-0 focus:ring-0 focus:outline-none"
								value=""
								// onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-[#1E2729]">Categoria</p>
						<select
							name="categoria"
							id="categoria"
							className="bg-[#D9D9D9] p-2  rounded-lg border-0 focus:ring-0 focus:outline-none text-[#808080]">
							<option value="" selected disabled>
								Selecione uma categoria
							</option>
						</select>
					</div>
					<div className="flex justify-center items-center gap-10">
						<button
							className="rounded-lg disabled:bg-slate-200 hover:border-3 bg-[#FD6101] hover:bg-[#B63700]
                                    text-white font-bold w-1/2 mx-auto py-2 flex justify-center uppercase">
							Cancelar
						</button>
						<button
							type="submit"
							className="rounded-lg disabled:bg-slate-200 border-3 border-[#FD6101] hover:bg-[#FD6101]
                                    text-[#FD6101] hover:text-white font-bold w-1/2 mx-auto py-2 flex justify-center uppercase"
							// disabled={}
						>
							Salvar
							{/* {isLoading ?
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                /> :
                                <span>Salvar</span>
                            } */}
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default FormExercicio;
